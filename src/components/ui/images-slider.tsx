// "use client";
// import { cn } from "@/lib/utils";
// import { motion, AnimatePresence } from "framer-motion";
// import React, { useEffect, useState } from "react";


// export const ImagesSlider = ({
//   images,
//   children,
//   overlay = true,
//   overlayClassName,
//   className,
//   autoplay = true,
//   direction = "up",
// }: {
//   images: string[];
//   children: React.ReactNode;
//   overlay?: React.ReactNode;
//   overlayClassName?: string;
//   className?: string;
//   autoplay?: boolean;
//   direction?: "up" | "down";
// }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [loadedImages, setLoadedImages] = useState<string[]>([]);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex + 1 === images.length ? 0 : prevIndex + 1
//     );
//   };

//   const handlePrevious = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   useEffect(() => {
//     loadImages();
//   }, []);

//   const loadImages = () => {
//     setLoading(true);
//     const loadPromises = images.map((image) => {
//       return new Promise((resolve, reject) => {
//         const img = new Image();
//         img.src = image;
//         img.onload = () => resolve(image);
//         img.onerror = reject;
//       });
//     });

//     Promise.all(loadPromises)
//       .then((loadedImages) => {
//         setLoadedImages(loadedImages as string[]);
//         setLoading(false);
//       })
//       .catch((error) => console.error("Failed to load images", error));
//   };
//   useEffect(() => {
//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (event.key === "ArrowRight") {
//         handleNext();
//       } else if (event.key === "ArrowLeft") {
//         handlePrevious();
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     // autoplay
//     let interval: any;
//     if (autoplay) {
//       interval = setInterval(() => {
//         handleNext();
//       }, 5000);
//     }

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       clearInterval(interval);
//     };
//   }, []);

//   const slideVariants = {
//     initial: {
//       scale: 0,
//       opacity: 0,
//       rotateX: 45,
//     },
//     visible: {
//       scale: 1,
//       rotateX: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//         ease: [0.645, 0.045, 0.355, 1.0],
//       },
//     },
//     upExit: {
//       opacity: 1,
//       y: "-150%",
//       transition: {
//         duration: 1,
//       },
//     },
//     downExit: {
//       opacity: 1,
//       y: "150%",
//       transition: {
//         duration: 1,
//       },
//     },
//   };

//   const areImagesLoaded = loadedImages.length > 0;

//   return (
//     <div
//       className={cn(
//         "overflow-hidden h-full w-full relative flex items-center justify-center",
//         className
//       )}
//       style={{
//         perspective: "1000px",
//       }}
//     >
//       {areImagesLoaded && children}
//       {areImagesLoaded && overlay && (
//         <div
//           className={cn("absolute inset-0 bg-black/60 z-40", overlayClassName)}
//         />
//       )}

//       {areImagesLoaded && (
//         <AnimatePresence>
//           <motion.img
//             key={currentIndex}
//             src={loadedImages[currentIndex]}
//             initial="initial"
//             animate="visible"
//             exit={direction === "up" ? "upExit" : "downExit"}
//             variants={slideVariants}
//             className="image h-full w-full absolute inset-0 object-cover object-center"
//           />
//         </AnimatePresence>
//       )}
//     </div>
//   );
// };



// "use client";
// import { cn } from "@/lib/utils";
// import { motion, AnimatePresence } from "framer-motion";
// import React, { useEffect, useState } from "react";

// export const ImagesSlider = ({
//   images,
//   children,
//   overlay = true,
//   overlayClassName,
//   className,
//   autoplay = true,
//   direction = "up",
// }: {
//   images: string[];
//   children: React.ReactNode;
//   overlay?: React.ReactNode;
//   overlayClassName?: string;
//   className?: string;
//   autoplay?: boolean;
//   direction?: "up" | "down";
// }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [loadedImages, setLoadedImages] = useState<string[]>([]);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex + 1 === images.length ? 0 : prevIndex + 1
//     );
//   };

//   const handlePrevious = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   useEffect(() => {
//     loadImages();
//   }, []);

//   const loadImages = () => {
//     const loadPromises = images.map((image) => {
//       return new Promise((resolve, reject) => {
//         const img = new Image();
//         img.src = image;
//         img.onload = () => resolve(image);
//         img.onerror = reject;
//       });
//     });

//     Promise.all(loadPromises)
//       .then((loadedImages) => {
//         setLoadedImages(loadedImages as string[]);
//       })
//       .catch((error) => console.error("Failed to load images", error));
//   };

//   useEffect(() => {
//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (event.key === "ArrowRight") {
//         handleNext();
//       } else if (event.key === "ArrowLeft") {
//         handlePrevious();
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     // autoplay
//     let interval: NodeJS.Timeout | undefined;
//     if (autoplay) {
//       interval = setInterval(() => {
//         handleNext();
//       }, 5000);
//     }

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       if (interval) clearInterval(interval);
//     };
//   }, [autoplay]);

//   const slideVariants = {
//     initial: {
//       scale: 0,
//       opacity: 0,
//       rotateX: 45,
//     },
//     visible: {
//       scale: 1,
//       rotateX: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//         ease: [0.645, 0.045, 0.355, 1.0],
//       },
//     },
//     upExit: {
//       opacity: 1,
//       y: "-150%",
//       transition: {
//         duration: 1,
//       },
//     },
//     downExit: {
//       opacity: 1,
//       y: "150%",
//       transition: {
//         duration: 1,
//       },
//     },
//   };

//   const areImagesLoaded = loadedImages.length > 0;

//   return (
//     <div
//       className={cn(
//         "overflow-hidden h-full w-full relative flex items-center justify-center",
//         className
//       )}
//       style={{
//         perspective: "1000px",
//       }}
//     >
//       {areImagesLoaded && children}
//       {areImagesLoaded && overlay && (
//         <div
//           className={cn("absolute inset-0 bg-black/60 z-40", overlayClassName)}
//         />
//       )}

//       {areImagesLoaded && (
//         <AnimatePresence>
//           <motion.img
//             key={currentIndex}
//             src={loadedImages[currentIndex]}
//             initial="initial"
//             animate="visible"
//             exit={direction === "up" ? "upExit" : "downExit"}
//             variants={slideVariants}
//             className="image h-full w-full absolute inset-0 object-cover object-center"
//           />
//         </AnimatePresence>
//       )}
//     </div>
//   );
// };




// "use client";
// import { cn } from "@/lib/utils";
// import { motion, AnimatePresence } from "framer-motion";
// import React, { useEffect, useState } from "react";

// export const ImagesSlider = ({
//   images,
//   children,
//   overlay = true,
//   overlayClassName,
//   className,
//   autoplay = true,
//   direction = "up",
// }: {
//   images: string[];
//   children: React.ReactNode;
//   overlay?: React.ReactNode;
//   overlayClassName?: string;
//   className?: string;
//   autoplay?: boolean;
//   direction?: "up" | "down";
// }) => {
//   const [currentIndex, setCurrentIndex] = useState<number>(0);
//   const [loadedImages, setLoadedImages] = useState<string[]>([]);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex + 1 === images.length ? 0 : prevIndex + 1
//     );
//   };

//   const handlePrevious = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   useEffect(() => {
//     loadImages();
//   }, []);

//   const loadImages = () => {
//     const loadPromises = images.map((image) => {
//       return new Promise<string>((resolve, reject) => {
//         const img = new Image();
//         img.src = image;
//         img.onload = () => resolve(image);
//         img.onerror = () => reject(new Error(`Failed to load image: ${image}`));
//       });
//     });

//     Promise.all(loadPromises)
//       .then((loadedImages) => {
//         setLoadedImages(loadedImages);
//       })
//       .catch((error) => console.error(error));
//   };

//   useEffect(() => {
//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (event.key === "ArrowRight") {
//         handleNext();
//       } else if (event.key === "ArrowLeft") {
//         handlePrevious();
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     // autoplay
//     let interval: ReturnType<typeof setInterval> | undefined;
//     if (autoplay) {
//       interval = setInterval(() => {
//         handleNext();
//       }, 5000);
//     }

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       if (interval) clearInterval(interval);
//     };
//   }, [autoplay]);

//   const slideVariants = {
//     initial: {
//       scale: 0,
//       opacity: 0,
//       rotateX: 45,
//     },
//     visible: {
//       scale: 1,
//       rotateX: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//         ease: [0.645, 0.045, 0.355, 1.0],
//       },
//     },
//     upExit: {
//       opacity: 1,
//       y: "-150%",
//       transition: {
//         duration: 1,
//       },
//     },
//     downExit: {
//       opacity: 1,
//       y: "150%",
//       transition: {
//         duration: 1,
//       },
//     },
//   };

//   const areImagesLoaded = loadedImages.length > 0;

//   return (
//     <div
//       className={cn(
//         "overflow-hidden h-full w-full relative flex items-center justify-center",
//         className
//       )}
//       style={{
//         perspective: "1000px",
//       }}
//     >
//       {areImagesLoaded && children}
//       {areImagesLoaded && overlay && (
//         <div
//           className={cn("absolute inset-0 bg-black/60 z-40", overlayClassName)}
//         />
//       )}

//       {areImagesLoaded && (
//         <AnimatePresence>
//           <motion.img
//             key={currentIndex}
//             src={loadedImages[currentIndex]}
//             initial="initial"
//             animate="visible"
//             exit={direction === "up" ? "upExit" : "downExit"}
//             variants={slideVariants}
//             className="image h-full w-full absolute inset-0 object-cover object-center"
//           />
//         </AnimatePresence>
//       )}
//     </div>
//   );
// };



// "use client";
// import { cn } from "@/lib/utils";
// import { motion, AnimatePresence } from "framer-motion";
// import React, { useEffect, useState, useCallback } from "react";

// export const ImagesSlider = ({
//   images,
//   children,
//   overlay = true,
//   overlayClassName,
//   className,
//   autoplay = true,
//   direction = "up",
// }: {
//   images: string[];
//   children: React.ReactNode;
//   overlay?: React.ReactNode;
//   overlayClassName?: string;
//   className?: string;
//   autoplay?: boolean;
//   direction?: "up" | "down";
// }) => {
//   const [currentIndex, setCurrentIndex] = useState<number>(0);
//   const [loadedImages, setLoadedImages] = useState<string[]>([]);

//   const handleNext = useCallback(() => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex + 1 === images.length ? 0 : prevIndex + 1
//     );
//   }, [images.length]);

//   const handlePrevious = useCallback(() => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
//     );
//   }, [images.length]);

//   useEffect(() => {
//     loadImages();
//   }, [images]); // Load images whenever the images prop changes.

//   const loadImages = useCallback(() => {
//     const loadPromises = images.map((image) => {
//       return new Promise<string>((resolve, reject) => {
//         const img = new Image();
//         img.src = image;
//         img.onload = () => resolve(image);
//         img.onerror = () => reject(new Error(`Failed to load image: ${image}`));
//       });
//     });

//     Promise.all(loadPromises)
//       .then((loadedImages) => {
//         setLoadedImages(loadedImages);
//       })
//       .catch((error) => console.error(error));
//   }, [images]);

//   useEffect(() => {
//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (event.key === "ArrowRight") {
//         handleNext();
//       } else if (event.key === "ArrowLeft") {
//         handlePrevious();
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     // autoplay
//     let interval: ReturnType<typeof setInterval> | undefined;
//     if (autoplay) {
//       interval = setInterval(() => {
//         handleNext();
//       }, 5000);
//     }

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       if (interval) clearInterval(interval);
//     };
//   }, [autoplay, handleNext, handlePrevious]); // Include handleNext and handlePrevious as dependencies.

//   const slideVariants = {
//     initial: {
//       scale: 0,
//       opacity: 0,
//       rotateX: 45,
//     },
//     visible: {
//       scale: 1,
//       rotateX: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//         ease: [0.645, 0.045, 0.355, 1.0],
//       },
//     },
//     upExit: {
//       opacity: 1,
//       y: "-150%",
//       transition: {
//         duration: 1,
//       },
//     },
//     downExit: {
//       opacity: 1,
//       y: "150%",
//       transition: {
//         duration: 1,
//       },
//     },
//   };

//   const areImagesLoaded = loadedImages.length > 0;

//   return (
//     <div
//       className={cn(
//         "overflow-hidden h-full w-full relative flex items-center justify-center",
//         className
//       )}
//       style={{
//         perspective: "1000px",
//       }}
//     >
//       {areImagesLoaded && children}
//       {areImagesLoaded && overlay && (
//         <div
//           className={cn("absolute inset-0 bg-black/60 z-40", overlayClassName)}
//         />
//       )}

//       {areImagesLoaded && (
//         <AnimatePresence>
//           <motion.img
//             key={currentIndex}
//             src={loadedImages[currentIndex]}
//             initial="initial"
//             animate="visible"
//             exit={direction === "up" ? "upExit" : "downExit"}
//             variants={slideVariants}
//             className="image h-full w-full absolute inset-0 object-cover object-center"
//           />
//         </AnimatePresence>
//       )}
//     </div>
//   );
// };



"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState, useCallback } from "react";

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}: {
  images: string[];
  children: React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  // Memoize the loadImages function to prevent it from being recreated unnecessarily
  const loadImages = useCallback(() => {
    const loadPromises = images.map((image) => {
      return new Promise<string>((resolve, reject) => {
        const img = new Image();
        img.src = image;
        img.onload = () => resolve(image);
        img.onerror = () => reject(new Error(`Failed to load image: ${image}`));
      });
    });

    Promise.all(loadPromises)
      .then((loadedImages) => {
        setLoadedImages(loadedImages);
      })
      .catch((error) => console.error(error));
  }, [images]); // Make sure loadImages is updated when images change.

  useEffect(() => {
    loadImages(); // Call loadImages when the component mounts or images prop changes.
  }, [loadImages]); // Add loadImages as a dependency.

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // autoplay
    let interval: ReturnType<typeof setInterval> | undefined;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (interval) clearInterval(interval);
    };
  }, [autoplay, handleNext, handlePrevious]); // Add handleNext and handlePrevious as dependencies.

  const slideVariants = {
    initial: {
      scale: 0,
      opacity: 0,
      rotateX: 45,
    },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    },
    upExit: {
      opacity: 1,
      y: "-150%",
      transition: {
        duration: 1,
      },
    },
    downExit: {
      opacity: 1,
      y: "150%",
      transition: {
        duration: 1,
      },
    },
  };

  const areImagesLoaded = loadedImages.length > 0;

  return (
    <div
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-center",
        className
      )}
      style={{
        perspective: "1000px",
      }}
    >
      {areImagesLoaded && children}
      {areImagesLoaded && overlay && (
        <div
          className={cn("absolute inset-0 bg-black/60 z-40", overlayClassName)}
        />
      )}

      {areImagesLoaded && (
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={loadedImages[currentIndex]}
            initial="initial"
            animate="visible"
            exit={direction === "up" ? "upExit" : "downExit"}
            variants={slideVariants}
            className="image h-full w-full absolute inset-0 object-cover object-center"
          />
        </AnimatePresence>
      )}
    </div>
  );
};
