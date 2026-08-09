import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "勇気のおまもり",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているたねポケモンの最大HPは「+50」される。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 761019,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "G",
	rarity: "Promo",
};

export default card;
