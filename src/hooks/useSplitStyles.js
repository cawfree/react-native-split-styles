import { useState } from "react";
import { StyleSheet } from "react-native";
import { dequal } from "dequal";
import useDeepCompareEffect from "use-deep-compare-effect";

const shouldSplitStyles = (style, ...presets) => Object.entries(StyleSheet.flatten(style))
  .reduce(
    (arr, [k, v]) => {
      const e = presets.reduce((found, [...preset], i) => ((preset.indexOf(k) >= 0) && ((arr[i][k] = v) || true)) || found, false);

      if (!e) arr[arr.length - 1][k] = v;

      return arr;
    },
    [...presets.map(() => ({})), {}],
  );

export default function useSplitStyles(style, ...presets) {
  const [splitStyles, setSplitStyles] = useState(() => shouldSplitStyles(style, ...presets));

  useDeepCompareEffect(
    () => {
      const nextStyles = shouldSplitStyles(style, ...presets);
      if (!dequal(splitStyles, nextStyles)) {
        setSplitStyles(nextStyles);
      }
    },
    [splitStyles, style, ...presets, setSplitStyles],
  );

  return splitStyles;
}
