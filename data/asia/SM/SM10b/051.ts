import { Card } from "../../../interfaces";
import Set from "../SM10b";

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
			type: "holo",
			thirdParty: {
				cardmarket: 557253,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "B",
	rarity: "Rare Holo",
};

export default card;
