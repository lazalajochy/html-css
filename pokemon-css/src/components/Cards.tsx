import { useEffect, useState, useRef } from "react";
import { fetchData } from "../utils/query";
import "./Cards.css";

export const Cards = () => {
    const [data, setData] = useState<any>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false); // Estado para saber si el mouse está presionado
    const startX = useRef(0); // Posición inicial del mouse
    const scrollLeft = useRef(0); // Posición inicial del scroll

    useEffect(() => {
        const fetchDataAsync = async () => {
            const data = await fetchData('https://rickandmortyapi.com/api/character');
            setData(data.results);
        };
        fetchDataAsync();
    }, []);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        isDragging.current = true;
        startX.current = e.pageX - containerRef.current.offsetLeft;
        scrollLeft.current = containerRef.current.scrollLeft;
        containerRef.current.style.cursor = "grabbing";
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging.current || !containerRef.current) return;
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = x - startX.current; // Distancia movida
        containerRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const handleMouseUpOrLeave = () => {
        if (!containerRef.current) return;
        isDragging.current = false;
        containerRef.current.style.cursor = "grab";
    };

    return (
        <div
            className="album-container"
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
        >
            <div className="album-cards">
                {data && data.map((item: any, index: number) => (
                    <div className="card" key={index}>
                        <div className="card-image">
                            <img src={item.image} alt={item.name} className="card-image" />
                        </div>
                        <div className="card-details">
                            <h2>{item.name}</h2>
                            <h4>{item.status}</h4>
                            <h4>{item.species}</h4>
                            <h4>{item.gender}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};