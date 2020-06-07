import { useEffect, useState } from 'react';

const useIntersectionObserver = (selector: string) => {
    const [isObserve, setObserve] = useState(false);
    useEffect(() => {
        const elems = document.querySelectorAll(selector);

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                entry.isIntersecting ? setObserve(true) : setObserve(false);
            });
        });

        elems.forEach(elem => {
            observer.observe(elem);
        });
    });
    return {
        isObserve,
    };
};

export default useIntersectionObserver;
