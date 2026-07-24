import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "竜の秘薬",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		ja: "自分のバトル場の[N]ポケモンのHPを「60」回復する。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863974,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "H",
	rarity: "None",
};

export default card;
