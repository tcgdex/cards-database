import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "アンジュフラエッテ",
	},

	illustrator: "MARINA Chikazawa",
	category: "Trainer",

	effect: {
		ja: "このカードは、場に出ている「プリズムタワー」をトラッシュしなければ場に出せず、「プリズムタワー」を出した番でも場に出せる。おたがいの場の「メガフラエッテex」全員は、それぞれ最大HPが「+150」される。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 876978,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "J",
	rarity: "Uncommon",
};

export default card;
