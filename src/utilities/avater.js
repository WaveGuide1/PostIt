// avater styles naming for user profile
const avatarStyles = [
    'adventurer',
    'adventurer-neutral',
    'avataaars',
    'avataaars-neutral',
    'big-ears',
    'big-ears-neutral',
    'big-smile',
    'bottts',
    'bottts-neutral',
    'croodles',
    'croodles-neutral',
    'fun-emoji',
    'icons',
    'identicon',
    'initials',
    'lorelei',
    'lorelei-neutral',
    'micah',
    'miniavs',
    'open-peeps',
    'personas',
    'pixel-art',
    'pixel-art-neutral',
    'shapes',
    'thumbs'
];


const getRandomAvatarStyle = () => {
 // Write Your code here, and call the function in your model
const random = Math.floor(Math.random() * avatarStyles.length);
return avatarStyles[random];
}


// module.exports = getRandomAvatarStyle;