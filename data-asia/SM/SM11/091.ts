import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "ともだちてちょう",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュからサポートを2枚選び、相手に見せてから、山札にもどす。そして山札を切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557053,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "B",
	rarity: "Rare Holo",
};

export default card;
