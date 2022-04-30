import * as React from 'react';

interface LogoIconProps {
    className?: string;
    styles?: any;
}

export const LogoIcon: React.FC<LogoIconProps> = (props: LogoIconProps) => (
    <svg  className={props.className}
        style={props.styles} version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="125.000000pt" height="49.000000pt" viewBox="0 0 500.000000 269.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,269.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M2916 2582 c-3 -5 16 -15 42 -22 26 -6 81 -25 122 -40 56 -22 76 -26
82 -17 5 8 8 7 8 -5 0 -11 17 -26 43 -39 37 -19 138 -86 216 -143 50 -38 191
-198 237 -272 29 -46 50 -70 55 -63 4 7 7 2 7 -12 -1 -13 14 -58 33 -99 39
-86 38 -85 43 -79 3 2 -11 40 -30 84 -19 44 -32 85 -30 92 3 7 -4 19 -15 26
-11 6 -36 36 -56 66 -102 153 -247 290 -408 384 -38 23 -76 50 -84 60 -7 10
-19 16 -27 13 -8 -3 -38 4 -67 15 -28 12 -59 22 -67 24 -8 2 -27 8 -42 14 -16
6 -28 8 -28 5 0 -4 -6 -1 -14 5 -8 7 -17 8 -20 3z"/>
<path d="M3479 2133 c78 -71 186 -199 228 -270 13 -24 29 -40 35 -37 5 3 9 0
7 -7 -3 -27 1 -40 12 -34 6 4 9 1 8 -6 -4 -17 31 -109 41 -109 19 0 30 28 20
54 -13 36 -21 33 -13 -6 9 -52 -11 -22 -41 62 -32 88 -75 172 -76 148 0 -9 5
-20 10 -23 6 -3 10 -11 10 -17 0 -6 -13 6 -30 27 -16 21 -30 43 -30 50 0 7 -7
18 -15 25 -8 7 -13 16 -10 20 3 4 -2 10 -10 14 -8 3 -15 10 -15 17 0 6 7 9 15
5 21 -8 19 2 -11 41 -14 18 -32 33 -40 33 -7 0 -14 8 -14 19 0 10 -8 25 -17
32 -15 11 -16 11 -5 -1 6 -8 12 -24 12 -37 0 -16 6 -23 19 -23 25 0 55 -40 41
-54 -6 -6 -16 -4 -27 6 -132 111 -165 138 -171 138 -4 0 26 -30 67 -67z"/>
<path d="M2317 1913 c-4 -3 -7 -32 -7 -64 l0 -58 -90 -47 c-102 -54 -130 -78
-112 -96 9 -9 19 -7 40 9 38 28 133 76 139 70 2 -3 1 -53 -3 -111 l-7 -106
-41 -23 c-42 -23 -65 -65 -30 -54 11 3 29 9 42 13 l23 6 -7 -98 c-5 -72 -12
-108 -26 -132 -23 -37 -18 -76 9 -86 21 -8 43 18 43 49 0 35 21 53 90 75 76
26 237 38 292 22 28 -8 38 -7 42 3 2 7 0 17 -6 23 -6 6 -2 22 14 46 26 41 26
41 64 22 28 -15 53 -10 111 23 13 7 24 3 46 -15 33 -28 56 -30 96 -9 27 14 29
13 35 -8 3 -12 6 -34 6 -48 0 -14 6 -34 14 -44 12 -16 16 -17 30 -6 9 7 16 21
16 30 0 9 9 31 20 49 20 32 20 32 46 15 24 -15 28 -15 57 0 18 8 42 18 54 22
11 3 27 12 33 20 10 12 15 12 33 0 24 -16 121 -18 150 -3 13 7 28 3 53 -12 24
-15 43 -20 60 -16 15 4 32 2 40 -5 7 -6 20 -9 27 -6 8 3 -8 -31 -34 -76 -42
-70 -49 -90 -49 -134 0 -41 4 -54 19 -63 28 -14 48 -13 78 7 15 10 38 17 52
16 15 -1 18 0 9 3 -10 3 -18 10 -18 16 0 5 7 8 15 4 12 -4 13 -2 3 14 -10 15
-10 29 0 65 7 25 12 63 12 84 0 51 16 94 41 109 18 11 24 11 38 -2 10 -9 31
-16 48 -16 38 0 113 53 113 80 0 24 -9 25 -36 5 -33 -25 -47 -19 -41 19 12 76
-44 86 -89 15 -13 -21 -28 -39 -32 -39 -18 1 -32 18 -27 33 10 24 -13 57 -39
57 -16 0 -42 -20 -82 -65 -33 -36 -62 -65 -65 -65 -3 0 -12 21 -20 48 -11 38
-18 47 -37 47 -13 0 -27 6 -31 14 -15 24 -44 7 -58 -35 -9 -26 -23 -45 -39
-52 -22 -11 -26 -9 -33 11 -5 13 -4 32 2 46 9 19 8 26 -8 37 -10 8 -24 14 -31
14 -22 0 -63 -41 -90 -90 -15 -28 -30 -50 -34 -50 -3 0 -11 17 -16 37 -12 49
-36 53 -75 13 l-31 -31 3 120 c3 75 0 122 -6 123 -14 4 -35 -66 -45 -152 -8
-68 -12 -78 -41 -102 -54 -45 -78 -32 -65 37 5 26 12 35 24 33 12 -2 17 4 17
22 0 18 -6 26 -22 28 -23 3 -41 -12 -76 -68 -21 -33 -79 -80 -99 -80 -5 0 -12
8 -15 17 -5 12 8 30 45 63 78 70 64 98 -20 41 -42 -29 -43 -29 -46 -8 -6 44
-11 50 -27 37 -9 -8 -15 -30 -15 -60 0 -37 -6 -55 -30 -85 -16 -20 -32 -45
-35 -55 -5 -15 -21 -19 -93 -25 -82 -6 -208 -26 -261 -41 l-24 -7 7 87 c3 48
11 96 16 106 11 21 85 47 145 52 28 3 41 9 43 21 4 22 -38 22 -123 2 -32 -8
-61 -12 -63 -10 -2 2 2 53 8 114 12 109 13 110 44 125 71 33 206 68 285 73 79
6 85 5 101 -17 18 -24 33 -21 50 10 7 14 6 23 -6 34 -32 33 -244 11 -383 -38
-67 -25 -71 -23 -71 34 0 35 -4 50 -13 50 -8 0 -17 -3 -20 -7z"/>
<path d="M1203 1871 c-68 -32 -136 -141 -188 -301 -21 -67 -28 -111 -32 -211
-6 -146 7 -207 58 -255 26 -25 38 -29 81 -27 96 3 187 88 298 283 43 75 55 90
71 85 32 -11 36 2 21 64 -12 50 -12 64 -1 90 8 17 17 31 21 31 5 0 8 -62 8
-137 0 -113 -3 -140 -17 -155 -14 -16 -14 -22 -3 -43 10 -19 11 -55 6 -150 -6
-114 -5 -126 11 -132 10 -4 22 -12 26 -20 4 -7 16 -13 25 -12 10 0 12 3 5 6
-7 2 -13 9 -13 14 0 6 5 7 10 4 16 -10 12 11 -5 25 -19 16 -19 47 0 84 11 20
12 33 5 40 -5 5 -10 32 -10 58 l0 48 41 0 c82 0 199 77 259 170 101 157 108
345 16 401 -59 36 -119 19 -177 -50 -31 -35 -87 -135 -105 -186 -5 -13 -10 9
-14 61 -7 78 -31 141 -51 128 -14 -9 -10 10 8 36 13 20 14 22 2 13 -9 -7 -33
-49 -53 -93 -21 -44 -41 -80 -44 -80 -4 0 -6 -40 -4 -90 2 -57 0 -90 -7 -90
-5 0 -31 -38 -56 -85 -89 -163 -181 -260 -267 -280 -35 -9 -72 26 -87 81 -44
158 38 488 150 606 41 43 71 48 93 16 24 -34 19 -84 -18 -178 -19 -47 -32 -88
-29 -92 12 -21 32 -2 61 57 18 36 39 68 48 72 13 5 13 7 2 14 -10 6 -5 25 25
86 20 43 31 70 24 60 -6 -10 -22 -31 -34 -45 l-23 -27 0 36 c0 74 -61 105
-137 70z m682 -85 c69 -69 28 -264 -81 -385 -65 -72 -187 -126 -208 -92 -15
24 47 253 96 357 34 73 105 144 143 144 14 0 37 -11 50 -24z"/>
<path d="M1416 1015 c4 -22 10 -44 15 -49 5 -6 9 -19 9 -30 0 -12 9 -32 20
-46 11 -14 20 -30 20 -37 0 -23 110 -199 164 -263 12 -13 54 -57 94 -97 39
-39 72 -76 72 -81 0 -5 14 -12 30 -16 52 -10 103 -51 106 -85 2 -17 1 -31 -2
-31 -10 0 -98 53 -139 84 -105 80 -165 139 -160 157 5 14 2 17 -9 13 -12 -5
-15 -2 -10 10 3 9 10 13 15 10 5 -3 9 0 9 5 0 14 -23 14 -36 1 -7 -7 -20 2
-40 27 -44 55 -114 160 -114 171 0 14 -52 104 -57 99 -7 -8 56 -126 108 -203
163 -242 419 -422 703 -494 44 -11 89 -20 100 -19 22 1 -26 16 -78 24 -69 11
-286 95 -286 110 0 4 6 5 13 2 6 -2 19 2 28 9 13 11 25 9 80 -17 35 -17 95
-41 132 -54 37 -12 77 -31 88 -40 14 -14 22 -16 31 -7 12 12 66 6 83 -9 5 -5
31 -9 59 -9 59 0 58 6 -4 13 -25 3 -66 12 -92 20 -27 8 -48 11 -48 6 0 -13
-17 -11 -32 4 -7 8 -45 24 -83 37 -39 12 -100 37 -137 55 -44 21 -70 29 -77
22 -14 -14 -44 0 -37 18 6 17 -87 85 -116 85 -10 0 -18 5 -18 12 0 6 -44 57
-98 112 -139 143 -212 259 -283 446 -22 58 -28 66 -23 35z"/>
<path d="M1466 995 c-4 -15 -5 -30 -1 -33 3 -3 5 1 5 9 0 11 2 11 10 -1 13
-20 13 -33 0 -25 -16 10 -12 -1 24 -81 19 -41 40 -74 46 -74 6 0 9 -4 6 -8 -4
-7 36 -77 53 -92 3 -3 19 -24 35 -47 42 -62 191 -201 271 -254 70 -46 155 -93
155 -85 0 2 -30 23 -67 47 -100 64 -278 246 -344 351 -33 53 -61 88 -73 90
-11 2 -22 9 -24 17 -3 10 0 12 12 8 20 -8 21 -10 -11 65 -16 37 -33 63 -40 61
-6 -2 -20 15 -31 38 l-19 41 -7 -27z"/>
<path d="M1327 983 c-4 -7 -3 -14 3 -18 5 -3 10 -15 10 -26 0 -12 13 -48 29
-82 16 -34 32 -69 35 -77 3 -8 17 -33 31 -55 14 -22 28 -47 32 -55 37 -83 232
-284 350 -363 78 -52 209 -119 268 -137 22 -7 47 -15 55 -18 8 -3 18 -5 22 -4
4 1 20 -3 35 -9 15 -6 46 -13 67 -16 22 -2 48 -9 57 -14 10 -5 25 -6 34 -3 9
4 24 -1 35 -11 17 -15 24 -16 43 -7 12 7 56 13 97 15 l75 3 -85 2 c-58 1 -90
-2 -99 -10 -10 -11 -14 -10 -22 5 -6 10 -22 17 -39 17 -84 0 -275 57 -403 121
-273 137 -505 402 -602 688 -12 36 -25 60 -28 54z"/>
</g>
</svg>
    // <svg
    //     className={props.className}
    //     style={props.styles}
    //     fill="none"
    //     width="118"
    //     height="20"
    //     viewBox="0 0 118 20"
    //     xmlns="http://www.w3.org/2000/svg"
    // >
    //     <path d="M0.384613 17.1605C0.384613 18.7911 1.19766 19.5924 2.8651 19.5924H8.21193C12.1945 19.5924 14.7577 17.4698 14.7577 14.1804C14.7577 11.5658 13.104 9.7384 10.5684 9.49943V9.33075C12.5803 8.85281 13.793 7.29248 13.793 5.1277C13.793 2.23196 11.6433 0.404545 8.22571 0.404545H2.8651C1.19766 0.404545 0.384613 1.21985 0.384613 2.83641V17.1605ZM4.07778 8.38893V3.25812H7.37132C9.10766 3.25812 10.1274 4.21399 10.1274 5.77432C10.1274 7.44711 9.02498 8.38893 6.53071 8.38893H4.07778ZM4.07778 16.7388V11.0316H7.60559C9.78291 11.0316 10.968 12.1421 10.968 13.9555C10.968 15.7829 9.76912 16.7388 6.83388 16.7388H4.07778Z" fill="var(--primary-text-color)"/>
    //     <path d="M18.0925 19.761C19.0847 19.761 19.636 19.2409 20.0218 17.9196L21.0691 14.6584H27.67L28.7311 17.9196C29.1031 19.2269 29.6819 19.761 30.6879 19.761C31.749 19.761 32.4518 19.1144 32.4518 18.1023C32.4518 17.7087 32.3553 17.2448 32.1624 16.6404L27.4219 2.78018C26.8294 0.980882 26.0025 0.249918 24.4453 0.249918C22.8744 0.249918 22.0338 0.994939 21.4412 2.78018L16.7007 16.6404C16.4664 17.3573 16.37 17.7931 16.37 18.1726C16.37 19.1285 17.0728 19.761 18.0925 19.761ZM21.896 11.8329L24.2938 4.07342H24.4729L26.8569 11.8329H21.896Z" fill="var(--primary-text-color)"/>
    //     <path d="M34.2019 15.6423C34.2019 16.4436 34.6705 17.3011 35.5386 18.1164C36.7789 19.3112 38.9424 20 41.3816 20C45.874 20 48.7266 17.6806 48.7266 14.0258C48.7266 11.2003 47.1005 9.49943 43.6553 8.69818L40.8303 8.00939C39.0802 7.60173 38.2258 6.75831 38.2258 5.56347C38.2258 4.07342 39.4799 3.11755 41.4367 3.11755C43.0628 3.11755 44.3306 3.83446 45.1712 5.11364C45.6122 5.67592 46.1083 5.92895 46.6871 5.92895C47.5828 5.92895 48.1891 5.3245 48.1891 4.43891C48.1891 3.55331 47.7344 2.65367 46.88 1.86647C45.6397 0.699742 43.6278 0.0390625 41.3816 0.0390625C37.1923 0.0390625 34.4638 2.33035 34.4638 5.85866C34.4638 8.64195 36.0761 10.3991 39.3145 11.1582L42.1257 11.861C44.1652 12.353 45.0472 13.1543 45.0472 14.4475C45.0472 16.0078 43.7932 16.9075 41.5883 16.9075C39.9484 16.9075 38.5428 16.2609 37.4817 15.0098C36.8202 14.2788 36.3103 14.0117 35.6902 14.0117C34.8496 14.0117 34.2019 14.6865 34.2019 15.6423Z" fill="var(--primary-text-color)"/>
    //     <path d="M51.7583 17.1605C51.7583 18.7911 52.5713 19.5924 54.2388 19.5924H62.5208C63.4992 19.5924 64.1332 18.9879 64.1332 18.0461C64.1332 17.1043 63.4992 16.4858 62.5208 16.4858H55.4514V11.3409H62.1763C63.0583 11.3409 63.6508 10.7786 63.6508 9.89303C63.6508 9.00743 63.0583 8.4311 62.1763 8.4311H55.4514V3.51114H62.5622C63.4992 3.51114 64.1332 2.89264 64.1332 1.96487C64.1332 1.03711 63.4992 0.404545 62.5622 0.404545H54.2388C52.5713 0.404545 51.7583 1.21985 51.7583 2.83641V17.1605Z" fill="var(--primary-text-color)"/>
    //     <path fillRule="evenodd" clipRule="evenodd" d="M75.0182 0C73.5028 0 72.2744 1.25311 72.2744 2.79891V17.1933C72.2744 18.7391 73.5028 19.9922 75.0182 19.9922H114.314C115.829 19.9922 117.058 18.7391 117.058 17.1933V2.79891C117.058 1.25311 115.829 0 114.314 0H75.0182ZM84.8718 14.3366H84.7998C84.1516 15.407 83.0509 15.9841 81.6826 15.9841C79.5737 15.9841 78.154 14.6199 78.154 12.5946C78.154 10.5902 79.584 9.34147 81.9604 9.34147H84.8203V8.27109C84.8203 6.8544 83.987 6.13032 82.4336 6.13032C81.518 6.13032 80.9008 6.45563 80.2527 7.2112C80.0058 7.50503 79.7692 7.60997 79.4503 7.60997C79.0388 7.60997 78.761 7.32663 78.761 6.89638C78.761 6.27724 79.1828 5.66859 80.0469 5.16488C80.6745 4.79759 81.4872 4.5982 82.5468 4.5982C85.1495 4.5982 86.5898 5.89945 86.5898 8.26059V14.9138C86.5898 15.5434 86.2709 15.9107 85.7256 15.9107C85.201 15.9107 84.8923 15.5539 84.8718 14.9557V14.3366ZM79.9646 12.5526C79.9646 11.4298 80.7259 10.8001 82.053 10.8001H84.8203V12.0489C84.8203 13.4236 83.6578 14.473 82.1662 14.473C80.8494 14.473 79.9646 13.6965 79.9646 12.5526ZM91.4146 18.828V14.1792H91.5072C92.001 15.3335 93.1224 15.9841 94.6141 15.9841C97.1962 15.9841 98.8216 14.1687 98.8216 11.2619V9.30999C98.8216 6.42415 97.2168 4.5982 94.6758 4.5982C93.1224 4.5982 91.8673 5.33278 91.4249 6.52909H91.3323V5.65809C91.3323 5.02846 91.0237 4.67166 90.4888 4.67166C89.9538 4.67166 89.6452 5.03895 89.6452 5.67908V18.828C89.6452 19.4576 89.9744 19.8354 90.5299 19.8354C91.0854 19.8354 91.4146 19.4576 91.4146 18.828ZM91.4146 9.40443V11.3773C91.4146 13.1718 92.5874 14.41 94.2849 14.41C96.0337 14.41 97.0419 13.1193 97.0419 10.8841V9.68777C97.0419 7.44206 96.0337 6.1723 94.2334 6.1723C92.4948 6.1723 91.4146 7.38959 91.4146 9.40443ZM103.348 14.1792V18.828C103.348 19.4576 103.019 19.8354 102.463 19.8354C101.908 19.8354 101.579 19.4576 101.579 18.828V5.67908C101.579 5.03895 101.887 4.67166 102.422 4.67166C102.957 4.67166 103.266 5.02846 103.266 5.65809V6.52909H103.358C103.801 5.33278 105.056 4.5982 106.609 4.5982C109.15 4.5982 110.755 6.42415 110.755 9.30999V11.2619C110.755 14.1687 109.13 15.9841 106.548 15.9841C105.056 15.9841 103.935 15.3335 103.441 14.1792H103.348ZM103.348 11.3773V9.40443C103.348 7.38959 104.428 6.1723 106.167 6.1723C107.967 6.1723 108.975 7.44206 108.975 9.68777V10.8841C108.975 13.1193 107.967 14.41 106.218 14.41C104.521 14.41 103.348 13.1718 103.348 11.3773Z" fill="var(--icons)"/>
    // </svg>
);
