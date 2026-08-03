import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "穴掘りグローブ",
		'zh-tw': "挖洞手套",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンが使うワザの、相手のバトル場の[闘]ポケモンへのダメージは「+30」される。",
		'zh-tw': "寶可夢道具卡，附於自己的寶可夢使用。1隻寶可夢只可附上1張寶可夢道具卡，並且保持附加狀態。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571650,
				tcgplayer: 569383,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "E",
	rarity: "Uncommon",
};

export default card;
