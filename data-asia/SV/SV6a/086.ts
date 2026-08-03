import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "クセロシキのたくらみ",
	},

	illustrator: "GOSSAN",
	category: "Trainer",

	effect: {
		ja: "相手は相手自身の手札を、3枚になるようにトラッシュする。",
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
