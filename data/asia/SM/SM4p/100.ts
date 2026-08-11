import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "古代のクリスタル",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "このカードをつけている「レジロック」「レジアイス」「レジスチル」「レジギガス」が、相手のポケモンから受けるワザのダメージは「-30」される。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560133,
			},
		},
	],

	trainerType: "Tool",
	rarity: "None",
};

export default card;
