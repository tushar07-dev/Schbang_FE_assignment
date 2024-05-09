'use client';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

export default function FramerMagnetic({children}){
    const ref = useRef(null);
    const [position, setPosition] = useState({x:0, y:0});

    const mouseMove = (e) => {
        const {clientX, clientY} = e;
        const {width, height, left, top} = ref.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        // console.log(x, y);
        setPosition({x, y});
    }

    const mouseLeave = (e) => {
        setPosition({x:0, y:0});
    }

    const {x, y} = position;

    return (
        <motion.div
            ref={ref}
            animate={{x, y}}
              transition={{
                type: 'spring',
                duration: 2,
                ease: 'easeInOut',
              }}
            onMouseEnter={mouseMove}
            onMouseLeave={mouseLeave}
        >
            {
                children
            }
        </motion.div>
    )
}