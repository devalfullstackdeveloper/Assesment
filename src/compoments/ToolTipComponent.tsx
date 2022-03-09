import Tooltip from 'react-native-walkthrough-tooltip';
import React, { useState } from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

const ToolTipComponent = (props: any) => {
    const [toolTipVisible, setTooltipVisible] = useState<boolean>(false)
    return (
        <Tooltip
            isVisible={toolTipVisible}
            content={<Text>{props.english}</Text>}
            placement="top"
            onClose={() => setTooltipVisible(false)}
        >
            <TouchableHighlight onPress={() => setTooltipVisible(true)}>
                <Text style={styles.text}>{props.word} </Text>
            </TouchableHighlight>
        </Tooltip>
    )
}
const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 20
    }
});
export default ToolTipComponent;