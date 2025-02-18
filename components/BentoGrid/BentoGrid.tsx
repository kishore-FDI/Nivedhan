const BentoGrid = () => {
    const items = {
        "GI WIRE COIL": {
            "image": "/imgs/GIWIRECOIL.avif",
            "description": "GI WIRE COIL",
            "span": "sm:col-span-1 sm:row-span-2"
        },
        "TIN SHEET": {
            "image": "/imgs/THINSHEET.webp",
            "description": "TIN SHEET",
            "span": "sm:col-span-1 sm:row-span-2"
        },
        "MS BRIGHT BAR": {
            "image": "/imgs/MSBRIGHTBAR.webp",
            "description": "MS BRIGHT BAR",
            "span": "sm:col-span-1 sm:row-span-2"
        },
        "MS WIRE ROP": {
            "image": "https://images.jdmagicbox.com/quickquotes/images_main/recyclable-ms-wire-rope-scrap-2224394871-0vgjzydo.jpg",
            "description": "MS WIRE ROP",
            "span": "sm:col-span-1 sm:row-span-2"
        },
        "TIN CIRCLE": {
            "image": "/imgs/TINCIRCLE.jpg",
            "description": "TIN CIRCLE",
            "span": "sm:col-span-2 sm:row-span-2"
        }
    }

    return (
        <section className='w-full py-6 sm:py-12 px-2 sm:px-4'>
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 auto-rows-[150px] sm:auto-rows-[160px]'>
                    {Object.entries(items).map(([key, value]) => (
                        <div 
                            key={key} 
                            className={`relative group overflow-hidden rounded-lg sm:rounded-xl ${value.span} transition-transform duration-300 hover:scale-[1.02]`}
                        >
                            <div className='absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 z-10'/>
                            <img
                                src={value.image} 
                                alt={value.description} 
                                className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110'
                            />
                            <div className='absolute bottom-0 left-0 right-0 p-2 sm:p-4 z-20'>
                                <p className='text-white text-sm sm:text-xl md:text-2xl font-bold tracking-wider'>
                                    {value.description}
                                </p>
                                <div className='w-0 h-0.5 sm:h-1 bg-white transition-all duration-300 group-hover:w-full'/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BentoGrid
