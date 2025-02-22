/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

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
    const textRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const target = entry.target as HTMLDivElement;
                    const index = textRefs.current.indexOf(target);
                    
                    textRefs.current.forEach((ref, i) => {
                        if (ref) {
                            const span = ref.querySelector('span') as HTMLSpanElement;
                            if (i !== index) {
                                span.style.height = '0%';
                            }
                        }
                    });

                    if (entry.isIntersecting) {
                        const span = target.querySelector('span') as HTMLSpanElement;
                        const scrollPosition = window.scrollY;
                        const elementTop = entry.boundingClientRect.top + scrollPosition;
                        const elementHeight = entry.boundingClientRect.height;
                        const windowHeight = window.innerHeight;
                        
                        const progress = (windowHeight - (elementTop - scrollPosition)) / (windowHeight + elementHeight);
                        
                        if (progress > 0.2 && progress < 0.5) {
                            span.style.height = '100%';
                        } else {
                            span.style.height = '0%';
                        }
                    }
                });
            },
            {
                threshold: Array.from({ length: 20 }, (_, i) => i / 20), 
                rootMargin: '-20% 0px -20% 0px' 
            }
        );

        textRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            lenis.destroy();
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <section className="font-circular-web text-2xl mx-16  sm:flex justify-between -m-8 mb-5 sm:mt-0 mt-10 sm:text-left text-center">
                <h1 className='text-4xl'>
                What do we sell?
                </h1>
                <section className="space-y-3 flex flex-col mt-2 text-4xl">
                    {items && items.map((item,index)=>(
                    <div
                        key={index}
                        ref={(el) => {
                            if (el) {
                                textRefs.current[index] = el;
                            }
                        }}
                        className="relative inline-block w-full"
                    >
                        <span className="bg-green-600 w-full h-0 absolute left-0 -z-10 transition-all duration-500 ease-out" />
                        {item.title}
                    </div>
                ))}
                </section>
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
