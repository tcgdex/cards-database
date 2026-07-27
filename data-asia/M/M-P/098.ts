import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "シュシュプ",
	},

	illustrator: "Terada Tera",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "昔の 貴婦人たちは 香水の かわりに 好みの 香りを 出す シュシュプを 連れていたという。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "あまいかおり" },
			cost: ["Colorless"],
			effect: {
				ja: "自分のポケモン1匹のHPを「30」回復する。",
			},
		},
		{
			name: { ja: "ぶつかる" },
			damage: 10,
			cost: ["Psychic"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 888190,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Promo",
	dexId: [682],
};

export default card;
