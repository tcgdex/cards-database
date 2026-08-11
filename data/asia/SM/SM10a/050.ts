import { Card } from "../../../interfaces";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		ja: "巨大なカマド",
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、自分の番ごとに1回、自分の手札を1枚トラッシュしてよい。その場合、自分の山札にある[炎]エネルギーを2枚まで、相手に見せてから、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557329,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "C",
	rarity: "Uncommon",
};

export default card;
