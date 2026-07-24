import { Card } from "../../../interfaces";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		ja: "エレキパワー",
	},

	illustrator: "Eske Yoshinob",
	category: "Trainer",

	effect: {
		ja: "この番、自分の[雷]ポケモンが使うワザの、相手のバトルポケモンへのダメージは「+30」される。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558621,
			},
		},
	],

	trainerType: "Item",
	rarity: "Uncommon",
};

export default card;
