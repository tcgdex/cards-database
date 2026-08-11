import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "ナミイルカ",
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		ja: "水のリングは 頭の 穴から 出る 粘着液と 海の水を 混ぜて 作り出したものなのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ドレインフィン" },
			damage: 20,
			cost: ["Water", "Water"],
			effect: {
				ja: "このポケモンのHPを「20」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 888262,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "Common",
	dexId: [963],
};

export default card;
