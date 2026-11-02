import { Card } from "../../../interfaces";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		ja: "スーパーボール",
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		ja: "自分の山札を上から7枚見る。その中からポケモンを1枚選び、相手に見せてから、手札に加えてよい。残りのカードは山札にもどし、山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560219,
			},
		},
	],

	trainerType: "Item",
	rarity: "Uncommon",
};

export default card;
