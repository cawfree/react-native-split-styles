# react-native-split-styles
Split [**StyleSheet**](https://reactnative.dev/docs/stylesheet) keys into dedicated groups to help ease the routing of style groups to nested components.

## 🚀 Installing

```
yarn add react-native-split-styles
```

## ✍️ Usage

Below, we show how we can take a single `style` prop and route the contents based on predefined presets to separate nested components.

```javascript
import React from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

import { useSplitStyles } from "react-native-split-styles";

import FlexPreset from "react-native-split-styles/dist/presets/Flex";
import ShadowPreset from "react-native-split-styles/dist/presets/Shadow";
import TextPreset from "react-native-split-styles/dist/presets/Text";

export default ({ style }) => {
  const [flex, shadow, text, { ...extras }] = useSplitStyles(style, FlexPreset, ShadowPreset, TextPreset);
  return (
    <View style={flex}>
      <TextInput style={text} />
      <Button style={shadow} />
    </View>
  );
};
```

## ✌️ License
[**MIT**](./LICENSE)
