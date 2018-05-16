import {h} from 'hyperapp';

export const Cake = ({width=48, height=48, colour='#FFFFFF', ...rest}) => (
    <svg width={width} height={height} viewBox="0 0 24 24" {...rest}>
        <path fill={colour} d="M12,6C13.11,6 14,5.1 14,4C14,3.62 13.9,3.27 13.71,2.97L12,0L10.29,2.97C10.1,3.27 10,3.62 10,4A2,2 0 0,0 12,6M16.6,16L15.53,14.92L14.45,16C13.15,17.29 10.87,17.3 9.56,16L8.5,14.92L7.4,16C6.75,16.64 5.88,17 4.96,17C4.23,17 3.56,16.77 3,16.39V21A1,1 0 0,0 4,22H20A1,1 0 0,0 21,21V16.39C20.44,16.77 19.77,17 19.04,17C18.12,17 17.25,16.64 16.6,16M18,9H13V7H11V9H6A3,3 0 0,0 3,12V13.54C3,14.62 3.88,15.5 4.96,15.5C5.5,15.5 6,15.3 6.34,14.93L8.5,12.8L10.61,14.93C11.35,15.67 12.64,15.67 13.38,14.93L15.5,12.8L17.65,14.93C18,15.3 18.5,15.5 19.03,15.5C20.11,15.5 21,14.62 21,13.54V12A3,3 0 0,0 18,9Z"/>
    </svg>
);

export const Hat = ({width=30, height=30, colour='#FFFFFF', ...rest}) => (
    <svg width={width} height={height} viewBox="0 0 24 24" {...rest}>
        <path fill={colour} d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"/>
    </svg>
);

export const Rocket = ({width=30, height=30, colour='#FFFFFF', ...rest}) => (
    <svg width={width} height={height} viewBox="0 0 24 24" {...rest}>
        <path fill={colour} d="M2.81,14.12L5.64,11.29L8.17,10.79C11.39,6.41 17.55,4.22 19.78,4.22C19.78,6.45 17.59,12.61 13.21,15.83L12.71,18.36L9.88,21.19L9.17,17.66C7.76,17.66 7.76,17.66 7.05,16.95C6.34,16.24 6.34,16.24 6.34,14.83L2.81,14.12M5.64,16.95L7.05,18.36L4.39,21.03H2.97V19.61L5.64,16.95M4.22,15.54L5.46,15.71L3,18.16V16.74L4.22,15.54M8.29,18.54L8.46,19.78L7.26,21H5.84L8.29,18.54M13,9.5A1.5,1.5 0 0,0 11.5,11A1.5,1.5 0 0,0 13,12.5A1.5,1.5 0 0,0 14.5,11A1.5,1.5 0 0,0 13,9.5Z"/>
    </svg>
);

export const ChevronLeft = ({width=30, height=30, colour='#FFFFFF', ...rest}) => (
    <svg width={width} height={height} viewBox="0 0 24 24" {...rest}>
        <path fill={colour} d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
    </svg>
);

export const ChevronRight = ({width=30, height=30, colour='#FFFFFF', ...rest}) => (
    <svg width={width} height={height} viewBox="0 0 24 24" {...rest}>
        <path fill={colour} d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
    </svg>
);

export const Back = ({width=30, height=30, colour='#FFFFFF', ...rest}) => (
    <svg width={width} height={height} viewBox="0 0 24 24" {...rest}>
        <path fill={colour} d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"/>
    </svg>
);

export const PlayCircle = ({width=30, height=30, colour='#28A745', ...rest}) => (
    <svg width={width} height={height} viewBox="0 0 24 24" {...rest}>
        <path fill={colour} d="M10,16.5V7.5L16,12M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
    </svg>
);

export const PlusCircle = ({width=30, height=30, colour='#FFFFFF', ...rest}) => (
    <svg width={width} height={height} viewBox="0 0 24 24" {...rest}>
        <path fill={colour} d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
    </svg>
);

export const XCircle = ({width=30, height=30, colour='#FFFFFF', ...rest}) => (
    <svg width={width} height={height} viewBox="0 0 24 24" {...rest}>
        <path fill={colour} d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z"/>
    </svg>
);

export const X = ({width=30, height=30, colour='#24292E', ...rest}) => (
    <svg width={width} height={height} viewBox="0 0 24 24" {...rest}>
        <path fill={colour} d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/>
    </svg>
);

export const Loop = ({width=30, height=30, colour='#24292E', ...rest}) => (
    <svg width={width} height={height} viewBox="0 0 24 24" {...rest}>
        <path fill={colour} d="M12,18A6,6 0 0,1 6,12C6,11 6.25,10.03 6.7,9.2L5.24,7.74C4.46,8.97 4,10.43 4,12A8,8 0 0,0 12,20V23L16,19L12,15M12,4V1L8,5L12,9V6A6,6 0 0,1 18,12C18,13 17.75,13.97 17.3,14.8L18.76,16.26C19.54,15.03 20,13.57 20,12A8,8 0 0,0 12,4Z"/>
    </svg>
);

export const Shuffle = ({width=30, height=30, colour='#24292E', ...rest}) => (
    <svg width={width} height={height} viewBox="0 0 24 24" {...rest}>
        <path fill={colour} d="M17,3L22.25,7.5L17,12L22.25,16.5L17,21V18H14.26L11.44,15.18L13.56,13.06L15.5,15H17V12L17,9H15.5L6.5,18H2V15H5.26L14.26,6H17V3M2,6H6.5L9.32,8.82L7.2,10.94L5.26,9H2V6Z"/>
    </svg>
);

export const Body = ({width=24, height=24, colour='#FFFFFF', ...rest}) => (
    <svg width={width} height={height} viewBox="0 0 24 24" {...rest}>
        <path fill={colour} d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/>
    </svg>
);

export const Face = ({width=24, height=24, colour='#FFFFFF', ...rest}) => (
    <svg width={width} height={height} viewBox="0 0 24 24" {...rest}>
        <path fill={colour} d="M9,11.75A1.25,1.25 0 0,0 7.75,13A1.25,1.25 0 0,0 9,14.25A1.25,1.25 0 0,0 10.25,13A1.25,1.25 0 0,0 9,11.75M15,11.75A1.25,1.25 0 0,0 13.75,13A1.25,1.25 0 0,0 15,14.25A1.25,1.25 0 0,0 16.25,13A1.25,1.25 0 0,0 15,11.75M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,11.71 4,11.42 4.05,11.14C6.41,10.09 8.28,8.16 9.26,5.77C11.07,8.33 14.05,10 17.42,10C18.2,10 18.95,9.91 19.67,9.74C19.88,10.45 20,11.21 20,12C20,16.41 16.41,20 12,20Z"/>
    </svg>
);

export const ArrowDown = ({width=24, height=24, colour='#000000', ...rest}) => (
    <svg width={width} height={height} viewBox="0 0 24 24" {...rest}>
        <path fill={colour} d="M7,10L12,15L17,10H7Z"/>
    </svg>
);