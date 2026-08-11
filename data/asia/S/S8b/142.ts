import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "おはらいグローブ",
		'zh-tw': "消災手套",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンが使うワザの、相手のバトル場の[P]ポケモンへのダメージは「+30」される。",
		'zh-tw': "寶可夢道具卡，附於自己的寶可夢使用。1隻寶可夢只可附上1張寶可夢道具卡，並且保持附加狀態。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586658,
				tcgplayer: 571395,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578423,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "E",
	rarity: "None",
};

export default card;
