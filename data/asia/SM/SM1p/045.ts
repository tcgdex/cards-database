import { Card } from "../../../interfaces";
import Set from "../SM1p";

const card: Card = {
	set: Set,
	name: {
		ja: "ハイパーボール",
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分の手札を2枚トラッシュしなければ使えない。自分の山札からポケモンを1枚選び、相手に見せてから、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561573,
			},
		},
	],

	trainerType: "Item",
	rarity: "None",
};

export default card;
