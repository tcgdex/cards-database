import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "タフネスマント",
		'zh-tw': "堅韌斗篷",
	},

	illustrator: "inose yukie",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているたねポケモン（「ポケモンGX」をのぞく）の最大HPは「50」大きくなる。",
		'zh-tw': "寶可夢道具卡，附於自己的寶可夢使用。1隻寶可夢只可附上1張寶可夢道具卡，並且保持附加狀態。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586659,
				tcgplayer: 571396,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578424,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "D",
	rarity: "None",
};

export default card;
