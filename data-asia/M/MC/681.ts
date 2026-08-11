import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "くさりもち",
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているどくのポケモンが使うワザの、相手のバトルポケモンへのダメージは「+40」される。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863983,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "H",
	rarity: "None",
};

export default card;
