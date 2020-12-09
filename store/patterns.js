const importAllImages = () => {
    const allImages = require.context('../assets/images', true, /\.jpg|\.png$/);
    return allImages.keys().map((key) => allImages(key));
}

const patternList = (list) => {
    return list.map((image, index) => {
        return {
            id: index,
            image
        }
    })
}

export const state = () => ({
    currentPattern: undefined,
    patterns: patternList(importAllImages())
});

export const mutations = {
    getPatternsSuccess(state, payload) {
        state.patterns = payload;
    },
    setCurrentPattern(state, payload) {
        state.currentPattern = payload;
    },
    resetCurrentPattern(state) {
        state.currentPattern = undefined;
    }
}

export const getters = {
    getCurrentPattern: (state) => {
        return state.currentPattern;
    },
    getPatterns: (state) => {
        return state.patterns;
    },
    getAll: (state) => {
        return importAllImages();
    },
}