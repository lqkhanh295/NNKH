import fp from 'fingerpose';

// Create a gesture description for 'A'
export const AGesture = new fp.GestureDescription('A');
AGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
AGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0);
AGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
AGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
AGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);

// Create a gesture description for 'B'
export const BGesture = new fp.GestureDescription('B');
BGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1.0);
BGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
BGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
BGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.NoCurl, 1.0);
BGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0);

// Create a gesture description for 'C'
export const CGesture = new fp.GestureDescription('C');
for(let finger of [fp.Finger.Thumb, fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
    CGesture.addCurl(finger, fp.FingerCurl.HalfCurl, 1.0);
}

// Create a gesture description for 'V'
export const VGesture = new fp.GestureDescription('V');
VGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1.0);
VGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
VGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
VGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
VGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);
VGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 1.0);
VGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 1.0);
VGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpRight, 1.0);
VGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpLeft, 1.0);

// Create a gesture description for 'L'
export const LGesture = new fp.GestureDescription('L');
LGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
LGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
LGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);
LGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 1.0);
LGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalRight, 1.0);
LGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
LGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
LGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);

// Create a gesture description for 'Y'
export const YGesture = new fp.GestureDescription('Y');
YGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
YGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0);
YGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
YGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
YGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0);

export const gestures = [
    AGesture,
    BGesture,
    CGesture,
    VGesture,
    LGesture,
    YGesture
];
