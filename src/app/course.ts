export interface Course {
    id: number;
    title: string;
    platform: string;
    category: 'imagen' | 'video' | '3d' | 'ux';
    level: 'iniciacion' | 'avanzado';
    price: number; // 0 = gratis
    duration: string; // ej. "3h"
    description: string;
    url: string;
}