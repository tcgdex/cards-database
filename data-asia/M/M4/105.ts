import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ジャンボアイス",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		ja: "エネルギーが3個以上ついている自分のバトルポケモンのHPを「80」回復する。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 877350,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "Ultra Rare",
};

export default card;
