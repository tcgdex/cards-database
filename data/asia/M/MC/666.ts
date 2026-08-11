import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ホップのバッグ",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札からたねポケモンの「ホップのポケモン」を2枚まで選び、ベンチに出す。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863968,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "None",
};

export default card;
