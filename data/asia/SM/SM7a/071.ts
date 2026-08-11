import { Card } from "../../../interfaces";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		ja: "エレキパワー",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		ja: "この番、自分の[雷]ポケモンが使うワザの、相手のバトルポケモンへのダメージは「+30」される。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558959,
			},
		},
	],

	trainerType: "Item",
	rarity: "Secret Rare",
};

export default card;
