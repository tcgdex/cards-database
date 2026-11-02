import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "望遠スコープ",
		'zh-tw': "望遠鏡",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンが使うワザの、相手のベンチの「ポケモンV・GX」へのダメージは「+30」される",
		'zh-tw': "寶可夢道具卡，附於自己的寶可夢使用。1隻寶可夢只可附上1張寶可夢道具卡，並且保持附加狀態。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586662,
				tcgplayer: 571399,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578427,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "D",
	rarity: "None",
};

export default card;
