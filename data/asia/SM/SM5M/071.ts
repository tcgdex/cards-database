import { Card } from "../../../interfaces";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		ja: "デンジ",
	},

	illustrator: "TOKIYA",
	category: "Trainer",

	effect: {
		ja: "自分の山札にあるグッズと[雷]エネルギーを1枚ずつ、相手に見せてから、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559884,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Ultra Rare",
};

export default card;
