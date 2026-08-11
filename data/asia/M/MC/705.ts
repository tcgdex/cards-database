import { Card } from "../../../interfaces";
import Set from "../MC";

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
			type: "normal",
			thirdParty: {
				cardmarket: 864007,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "None",
};

export default card;
