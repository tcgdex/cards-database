import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "パニックマスク",
		'zh-tw': "恐慌面具",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンは、残りHPが「40」以下の相手のポケモンから、ワザのダメージを受けない。",
		'zh-tw': "寶可夢道具卡，附於自己的寶可夢使用。1隻寶可夢只可附上1張寶可夢道具卡，並且保持附加狀態。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667969,
				tcgplayer: 570025,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "F",
	rarity: "Uncommon",
};

export default card;
