import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "ブレイクグローブ",
		'zh-tw': "破壞手套",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンが使うワザの、相手のバトル場の[鋼]ポケモンへのダメージは「+30」される。",
		'zh-tw': "附有這張卡的寶可夢使用的招式，對對手的戰鬥場的【鋼】寶可夢造成的傷害「+30」點。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560480,
				tcgplayer: 569196,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "E",
	rarity: "Uncommon",
};

export default card;
