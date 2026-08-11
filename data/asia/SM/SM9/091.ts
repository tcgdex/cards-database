import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "トキワの森",
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、自分の番ごとに1回、自分の手札を1枚トラッシュしてよい。その場合、自分の山札にある基本エネルギーを1枚、相手に見せてから、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558466,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "C",
	rarity: "Uncommon",
};

export default card;
