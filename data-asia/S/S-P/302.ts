import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "アブソル",
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		ja: "風のように 野山を 駆けぬける。 弓なりの ツノは 自然災害の 予兆を 敏感に 感じとる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "きりさく" },
			damage: 30,
			cost: ["Darkness"],
		},
		{
			name: { ja: "ロストクロー" },
			damage: 70,
			cost: ["Darkness", "Colorless", "Colorless"],
			effect: {
				ja: "相手の手札からオモテを見ないで1枚選び、ロストゾーンに置く。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 597475,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [359],
};

export default card;
