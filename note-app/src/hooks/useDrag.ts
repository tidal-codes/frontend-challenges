import { useState } from "react";

export function useDrag(x: number, y: number) {
    const [pos, setPos] = useState(() => ({ x, y }))
    const [isDragging, setIsDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleDragStart = (e: React.MouseEvent) => {
        setIsDragging(true);
        setOffset({ x: e.clientX - pos.x, y: e.clientY - pos.y })
    }
    const handleDragging = (e: React.MouseEvent) => {
        if (!isDragging) return;
        setPos({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    }
    const handleDragEnd = () => {
        setIsDragging(false);
    }

    return {
        pos,
        handleDragStart,
        handleDragging,
        handleDragEnd
    }
}