interface BentoItem {
    title: string;
    description: string;
    image: string;
    span?: string;
    link?: string;
}

interface BentoGridProps {
    items: BentoItem[];
    className?: string;
}

const defaultItems: BentoItem[] = [
    {
        title: "GI WIRE COIL",
        description: "High-quality galvanized iron wire coils for industrial applications",
        image: "/imgs/GIWIRECOIL.avif",
        span: "sm:col-span-1 sm:row-span-2",
        link: "/products/gi-wire-coil"
    },
    {
        title: "TIN SHEET",
        description: "Premium tin sheets with excellent corrosion resistance",
        image: "/imgs/THINSHEET.webp",
        span: "sm:col-span-1 sm:row-span-2",
        link: "/products/tin-sheet"
    },
    {
        title: "MS BRIGHT BAR",
        description: "Precision-engineered mild steel bright bars",
        image: "/imgs/MSBRIGHTBAR.webp",
        span: "sm:col-span-1 sm:row-span-2",
        link: "/products/ms-bright-bar"
    },
    {
        title: "MS WIRE ROPE",
        description: "Durable mild steel wire ropes for heavy-duty applications",
        image: "https://images.jdmagicbox.com/quickquotes/images_main/recyclable-ms-wire-rope-scrap-2224394871-0vgjzydo.jpg",
        span: "sm:col-span-1 sm:row-span-2",
        link: "/products/ms-wire-rope"
    },
    {
        title: "TIN CIRCLE",
        description: "Precision-cut tin circles for various industrial uses",
        image: "/imgs/TINCIRCLE.jpg",
        span: "sm:col-span-2 sm:row-span-2",
        link: "/products/tin-circle"
    }
];

const BentoGrid: React.FC<BentoGridProps> = ({ items = defaultItems, className = "" }) => {
    return (
        <>
            <section className="font-circular-web text-2xl mr-14 items-end flex flex-col -m-12">
                <h1>
                What do we sell?
                </h1>
                {items && items.map((item,index)=>(
                    <div key={index}>
                        {item.title}
                    </div>
                ))}
            </section>
            <section className={`w-full py-6 sm:py-12 px-2 sm:px-4 ${className}`}>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 auto-rows-[150px] sm:auto-rows-[160px]">
                    {items.map((item, index) => (
                        <a
                            href={item.link}
                            key={index}
                            className={`relative group overflow-hidden rounded-lg sm:rounded-xl ${
                                item.span
                            } transition-all duration-300 hover:scale-[1.02] cursor-pointer`}
                        >
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60 group-hover:from-black/20 group-hover:to-black/80 transition-colors duration-300 z-10" />
                            
                            {/* Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            
                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-20">
                                <h3 className="text-white text-sm sm:text-xl md:text-2xl font-bold tracking-wider mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-white/80 text-xs sm:text-sm line-clamp-2 mb-2 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    {item.description}
                                </p>
                                <div className="w-0 h-0.5 sm:h-1 bg-white transition-all duration-300 group-hover:w-full" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
        </>

    );
};

export default BentoGrid;
