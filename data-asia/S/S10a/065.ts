import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "からくりアーム",
		'zh-tw': "機關臂",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンは、ねむりまたはマヒでも、ワザが使える。",
		'zh-tw': "寶可夢道具卡，附於自己的寶可夢使用。1隻寶可夢只可附上1張寶可夢道具卡，並且保持附加狀態。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 656389,
				tcgplayer: 570728,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577133,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "F",
	rarity: "Uncommon",
};

export default card;
