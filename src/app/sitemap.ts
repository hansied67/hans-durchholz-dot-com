import type { MetadataRoute } from "next";

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://hansdurchholz.com",
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
            images: ["https://hansdurchholz.com/HomeSC.gif", "https://hansdurchholz.com/Frog.webp", "https://hansdurchholz.com/worm_foreground.png", "https://hansdurchholz.com/Sun.png", "https://hansdurchholz.com/Moon.png", "https://hansdurchholz.com/Bob%20Ross.png", "https://hansdurchholz.com/HeidiHans.jpg"]
        },
        {
            url: "https://hansdurchholz.com/bio",
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.7,
            // TODO: images: ['pic_of_me.png'],
        },
        {
            url: "https://hansdurchholz.com/portfolio",
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
            images: ['https://hansdurchholz.com/PortfolioSC.png', 'https://hansdurchholz.com/PROS%20logo.png', 'https://hansdurchholz.com/GlassBridgeLoginDialogue.png', 'https://hansdurchholz.com/DiceRollerImage.png', 'https://hansdurchholz.com/CTRBot%20SC1.png'],
        },
    ]
}