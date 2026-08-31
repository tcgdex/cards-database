import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "おいしいおむすび",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		ja: "自分のバトルポケモンのHPを「30」回復する。自分のトラッシュにある「おいしいおむすび」（このカードをのぞく）1枚につき、回復するHPは「30」多くなる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 900000,
				tcgplayer: 709216,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "J",
	rarity: "Common",
};

export default card;
