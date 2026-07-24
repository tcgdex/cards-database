import { Card } from "../../../interfaces";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		ja: "虚ろの海",
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		ja: "おたがいの特殊状態のポケモンは、進化・退化しても特殊状態が回復しない。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560295,
			},
		},
	],

	trainerType: "Stadium",
	rarity: "Uncommon",
};

export default card;
