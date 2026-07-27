import { Card } from "../../../interfaces";
import Set from "../SM2L";

const card: Card = {
	set: Set,
	name: {
		ja: "ヨワシGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みずでっぽう" },
			damage: 20,
			cost: ["Water"],
		},
		{
			name: { ja: "ばくりゅうのうず" },
			damage: 120,
			cost: ["Water", "Water", "Water", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについている特殊エネルギーを、1個トラッシュする。",
			},
		},
		{
			name: { ja: "ブルーサージGX" },
			damage: 220,
			cost: ["Water", "Water", "Water", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーをすべて、ベンチポケモンに好きなようにつけ替える。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561455,
			},
		},
	],

	retreat: 3,
	rarity: "Ultra Rare",
	dexId: [746],

	suffix: "GX",
};

export default card;
