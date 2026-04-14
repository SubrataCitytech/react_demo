import { useState } from 'react';
import './TopCategory.css'

const categories = [
    { label: "Heaters", emoji: "🔥" },
    { label: "Microwaves", emoji: "📡" },
    { label: "Air Conditioners", emoji: "❄️" },
    { label: "Steamers", emoji: "♨️" },
    { label: "Evellers", emoji: "🌫️" },
    { label: "Refrigeration", emoji: "🧊" },
    { label: "Washing/Dryers", emoji: "👕" },
    { label: "Space Warmers", emoji: "🌡️" },
    { label: "Air Conditioners", emoji: "🌬️" },
];

const TopCategory = () => {
    const [activeCategory, setActiveCategory] = useState(0);
    return (
        <div className="cat-nav">
            <div className="cat-nav-inner">
                {categories.map((c, i) => (
                    <div
                        key={i}
                        className={`cat-nav-item ${activeCategory === i ? "active" : ""}`}
                        onClick={() => setActiveCategory(i)}
                    >
                        <div className="cat-icon">{c.emoji}</div>
                        {c.label}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopCategory;
