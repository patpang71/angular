import {FacebookLike} from './facebookLike';

let page = new FacebookLike(5);
page.onClick();
console.log(`No of Like: ${page.noOfLike} isSelected: ${page.isSelected}`);