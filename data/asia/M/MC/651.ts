import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ハイパーボール",
	},

	illustrator: "Ayaka Yoshida",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分の手札を2枚トラッシュしなければ使えない。自分の山札からポケモンを1枚選び、相手に見せてから、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863953,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "None",
};

export default card;
