import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "火打石",
	},

	illustrator: "Yoshinobu Saito",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分の手札を2枚トラッシュしなければ使えない。自分の山札にある[炎]エネルギーを4枚まで、相手に見せてから、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557450,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "B",
	rarity: "Rare Holo",
};

export default card;
