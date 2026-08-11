import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "竜の秘薬",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のバトル場の[N]ポケモンのHPを「60」回復する。",
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
