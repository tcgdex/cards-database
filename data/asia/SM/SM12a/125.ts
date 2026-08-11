import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ネットボール",
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		ja: "自分の山札にある[草]タイプのたねポケモンまたは[草]エネルギーを1枚、相手に見せてから、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 544261,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "B",
	rarity: "None",
};

export default card;
