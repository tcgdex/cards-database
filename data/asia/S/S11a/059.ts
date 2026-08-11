import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "エネルギーつけかえ",
		'zh-tw': "能量轉移",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "自分のポケモンについている基本エネルギーを1個、自分の別のポケモンにつけ替える。",
		'zh-tw': "選擇1個自己的場上寶可夢身上附加的基本能量，改附於自己的其他寶可夢身上。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 673057,
				tcgplayer: 570822,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 570904,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "F",
	rarity: "Uncommon",
};

export default card;
