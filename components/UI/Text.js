import {Text} from "react-native";
import SeeMore from "react-native-see-more-inline";


function CustomText({children, style, props, seeMore, numberOfLines}) {
    function allStyles() {
        const customStyles = {
            fontFamily: 'sans-serif',
            color: '#333333'
        };
        console.log(style)
        console.log(Object.assign(customStyles, style))
        console.log(4444444)
        if (style)
            return Object.assign(customStyles, style)
        return customStyles;
    }

    function CText() {
        console.log(1111111111)
        console.log(seeMore)
        console.log(numberOfLines)
        if (!seeMore)
            return <Text {...props} style={allStyles()}>{children}</Text>
        console.log(2222222)
        console.log(seeMore)
        console.log(numberOfLines)
        console.log(props)
        console.log(allStyles())
        console.log(333333333)
        return <SeeMore {...props} numberOfLines={numberOfLines} style={allStyles()}>{children}</SeeMore>
    }

    return (
        CText()
    )
}

export default CustomText;
