import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "なぞの化石",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "このカードは、HP60の[無]タイプのたねポケモンとして、場に出すことができる。自分の番の中でなら、場に出ているこのカードをトラッシュしてよい。このカードは、にげられない。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557045,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "B",
	rarity: "Common",
};

export default card;
