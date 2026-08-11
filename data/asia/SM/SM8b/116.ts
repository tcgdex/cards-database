import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "火打石",
	},

	illustrator: "Eske Yoshinob",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分の手札を2枚トラッシュしなければ使えない。自分の山札にある[炎]エネルギーを4枚まで、相手に見せてから、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 551076,
			},
		},
	],

	trainerType: "Item",
	rarity: "None",
};

export default card;
