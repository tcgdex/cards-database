import { Card } from "../../../interfaces";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		ja: "ライコウ",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "雨雲を 背負っているので どんなときでも 雷を 出せる。 雷とともに 落ちてきたという。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "とどろくらいめい" },
			damage: 30,
			cost: ["Lightning"],
			effect: {
				ja: "自分のトラッシュにある[雷]エネルギーを1枚、ベンチポケモンにつける。",
			},
		},
		{
			name: { ja: "ライトニングボール" },
			damage: 90,
			cost: ["Lightning", "Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560191,
			},
		},
	],

	retreat: 2,
	rarity: "Rare",
	dexId: [243],
};

export default card;
