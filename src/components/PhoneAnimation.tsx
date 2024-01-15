import { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import Frame0 from '../assets/Frame0.png';
import Frame1 from '../assets/Frame1.png';
import Sign from '../assets/Sign.png';
import Stamp from '../assets/Stamp.png';
import Frame2 from '../assets/Frame2.png';
import FilePreview from '../assets/FilePreview.png';
import Frame3 from '../assets/Frame3.png';
import Brightness from '../assets/Brightness.png';
import Contrast from '../assets/Contrast.png';
import Frame4 from '../assets/Frame4.png';
import Vector from '../assets/Vector.png';
import PdfIcon from '../assets/PdfIcon.png';
import JpgIcon from '../assets/JpgIcon.png';
import TxtIcon from '../assets/TxtIcon.png';

interface PhoneAnimationProps {
  isAnimating: boolean;
  tabIndex: number;
  md: boolean;
}

export function PhoneAnimation({
  isAnimating,
  tabIndex,
  md,
}: PhoneAnimationProps) {
  const [animationIndex, setAnimationIndex] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setAnimationIndex(tabIndex);
    }, 700);
  }, [tabIndex]);

  const renderAnimation = () => {
    switch (animationIndex) {
      case 0:
        return (
          <motion.div
            key={animationIndex}
            initial={{
              y: 480,
            }}
            animate={{
              opacity: isAnimating ? 0 : 1,
              y: 5,
            }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{
              width: md ? 400 : '60%',
              marginLeft: md ? 150 : 0,
              marginRight: md ? 150 : 0,
            }}
          >
            <img src={Frame0} alt="frame0" style={{ width: '100%' }} />
          </motion.div>
        );
      case 1:
        return (
          <motion.div
            key={animationIndex}
            initial={{
              y: 480,
            }}
            animate={{
              opacity: isAnimating ? 0 : 1,
              y: 5,
            }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{
              width: md ? 400 : '60%',
              marginLeft: md ? 150 : 0,
              marginRight: md ? 150 : 0,
            }}
          >
            <img src={Frame1} alt="frame1" style={{ width: '100%' }} />
            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: '50%',
              }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
              style={{ position: 'absolute', bottom: '20%', left: '-21%' }}
            >
              <img src={Sign} alt="sign" style={{ width: '100%' }} />
            </motion.div>
            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: '100%',
              }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
              style={{
                position: 'absolute',
                top: '30%',
                left: '68%',
                marginRight: -250,
              }}
            >
              <img src={Stamp} alt="stamp" style={{ width: '50%' }} />
            </motion.div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            key={animationIndex}
            initial={{
              y: 480,
            }}
            animate={{
              opacity: isAnimating ? 0 : 1,
              y: 5,
            }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{
              width: md ? 400 : '60%',
              marginLeft: md ? 150 : 0,
              marginRight: md ? 150 : 0,
            }}
          >
            <img src={Frame2} alt="frame2" style={{ width: '100%' }} />
            <motion.div
              initial={{
                y: 480,
              }}
              animate={{
                y: 0,
              }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                textAlign: 'center',
              }}
            >
              <img src={FilePreview} alt="bottom" style={{ width: '70%' }} />
            </motion.div>
            <motion.div
              initial={{
                y: 480,
              }}
              animate={{
                y: 35,
              }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                textAlign: 'center',
              }}
            >
              <img src={FilePreview} alt="middle" style={{ width: '75%' }} />
            </motion.div>
            <motion.div
              initial={{
                y: 480,
              }}
              animate={{
                y: 70,
              }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.9 }}
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                textAlign: 'center',
              }}
            >
              <img src={FilePreview} alt="top" style={{ width: '80%' }} />
            </motion.div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            key={animationIndex}
            initial={{
              y: 480,
            }}
            animate={{
              opacity: isAnimating ? 0 : 1,
              y: 5,
            }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{
              width: md ? 400 : '60%',
              marginLeft: md ? 150 : 0,
              marginRight: md ? 150 : 0,
            }}
          >
            <img src={Frame3} alt="frame3" style={{ width: '100%' }} />
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
              style={{
                position: 'absolute',
                bottom: 15,
                left: -22,
                right: 0,
              }}
            >
              <img src={Brightness} alt="brightness" style={{ width: '10%' }} />
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.9 }}
              style={{
                position: 'absolute',
                bottom: 15,
                right: -22,
                left: 0,
                textAlign: 'end',
              }}
            >
              <img src={Contrast} alt="contrast" style={{ width: '10%' }} />
            </motion.div>
          </motion.div>
        );
      case 4:
        return (
          <motion.div
            key={animationIndex}
            initial={{
              y: 480,
            }}
            animate={{
              opacity: isAnimating ? 0 : 1,
              y: 5,
            }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{
              width: md ? 438 : '60%',
              marginLeft: md ? 150 : 0,
              marginRight: md ? 150 : 0,
            }}
          >
            <img src={Frame4} alt="frame4" style={{ width: '100%' }} />
            <motion.div
              initial={{
                y: 480,
                x: 300,
              }}
              animate={{
                y: 0,
                x: -30,
              }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
              style={{
                position: 'absolute',
                bottom: 20,
                left: 0,
              }}
            >
              <img src={Vector} alt="vector" style={{ width: '25%' }} />
            </motion.div>
            <motion.div
              initial={{
                y: 480,
                x: 300,
              }}
              animate={{
                y: 35,
                x: -25,
              }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
              style={{
                position: 'absolute',
                bottom: 50,
                left: 0,
              }}
            >
              <img src={PdfIcon} alt="pdf" style={{ width: '44%' }} />
            </motion.div>
            <motion.div
              initial={{
                y: 480,
              }}
              animate={{
                y: -40,
              }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.9 }}
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                textAlign: 'center',
              }}
            >
              <img src={JpgIcon} alt="jpg" style={{ width: '38%' }} />
            </motion.div>
            <motion.div
              initial={{
                y: 480,
                x: -300,
              }}
              animate={{
                y: 38,
                x: 40,
              }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 1.3 }}
              style={{
                position: 'absolute',
                bottom: 50,
                right: 0,
                textAlign: 'end',
              }}
            >
              <img src={TxtIcon} alt="txt" style={{ width: '44%' }} />
            </motion.div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return renderAnimation();
}
