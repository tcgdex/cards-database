import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "デンジ",
	},

	illustrator: "Hideki Ishikawa",
	category: "Trainer",

	effect: {
		ja: "自分の山札にあるグッズと[雷]エネルギーを1枚ずつ、相手に見せてから、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558470,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "B",
	rarity: "Rare Holo",
};

export default card;
