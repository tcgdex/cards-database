import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "そらのはしら",
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		ja: "おたがいのベンチポケモン全員は、相手のワザのダメージや効果を受けない。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559056,
			},
		},
	],

	trainerType: "Stadium",
	rarity: "Uncommon",
};

export default card;
