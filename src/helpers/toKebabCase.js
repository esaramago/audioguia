import replaceSpecialCharacters from './replaceSpecialCharacters';

export default function (string) {
    let kebabCase = '';

    kebabCase = replaceSpecialCharacters(string);

    kebabCase = kebabCase
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[\s_]+/g, '-')
        .toLowerCase();

    return kebabCase;
}