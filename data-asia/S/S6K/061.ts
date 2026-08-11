import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "草取りグローブ",
		'zh-tw': "除草手套",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンが使うワザの、相手のバトル場の[草]ポケモンへのダメージは「+30」される。",
		'zh-tw': "附有這張卡的寶可夢使用的招式，對對手的戰鬥場的【草】寶可夢造成的傷害「+30」點。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560849,
				tcgplayer: 569289,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "E",
	rarity: "Uncommon",
};

export default card;
