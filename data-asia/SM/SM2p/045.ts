import { Card } from "../../../interfaces";
import Set from "../SM2p";

const card: Card = {
	set: Set,
	name: {
		ja: "じゃくてんほけん",
	},

	illustrator: "Ayaka Yoshida",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンの弱点は、すべてなくなる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561300,
			},
		},
	],

	trainerType: "Tool",
	rarity: "None",
};

export default card;
