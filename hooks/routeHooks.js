import { useRouter } from 'next/router'

export const useDGBRouter = () => {
    const router = useRouter();
    
    const routeWithPath = (path) => {
        router.push(path);
    };

    const goBack = () => {
        router.back()
    }

    const replaceWithPath = (path) => {
        router.replace(path)
    }

    return {routeWithPath, replaceWithPath, goBack};
}