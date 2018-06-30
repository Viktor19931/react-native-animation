import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableWithoutFeedback,
    LayoutAnimation,
    UIManager,
    Platform
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from "./CardSection";
import * as actions from '../../actions'

class ListItem extends Component {
    componentWillUpdate() {

        // for Android !!!
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

        }
        const springAnimationProperties = {
            type: 'easeInEaseOut',
            property: 'scaleXY',
        };

        const animationConfig = {
            duration: 400,
            create: springAnimationProperties,
            update: springAnimationProperties,
            delete: springAnimationProperties,
        };
        LayoutAnimation.configureNext(animationConfig);
    }

    renderDescription() {
        console.log(this.props);

        const { descriptionStyle } = styles;
        const { library, expanded } = this.props;

        if(expanded) {
            return (
                <CardSection>
                    <Text style={descriptionStyle}>{library.description}</Text>
                </CardSection>
            );
        }
    }

    render() {
        const { titleStyle } = styles;
        const { title, id} = this.props.library;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        color: '#000',
        paddingLeft: 15
    },
    descriptionStyle: {
        flex: 1,
        color: '#000'
    }
};

const  mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;

    return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
