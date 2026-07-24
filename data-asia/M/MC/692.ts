import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "リーリエのしんじゅ",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		ja: "このカードをつけている「リーリエのポケモン」が、相手のポケモンからワザのダメージを受けてきぜつしたとき、とられるサイドは1枚少なくなる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863994,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "I",
	rarity: "None",
};

export default card;
