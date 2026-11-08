import { Card } from "models/database/card";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "クセロシキのたくらみ",
	},

	illustrator: "GOSSAN",
	category: "Trainer",

	effect: {
		'ja-jp': "相手は相手自身の手札を、3枚になるようにトラッシュする。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 773835,
				tcgplayer: 566337,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "Ultra Rare",
};

export default card;
