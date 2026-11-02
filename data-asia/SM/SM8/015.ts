import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "セレビィ",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ときのひずみ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分のベンチの進化しているポケモンを好きなだけ選ぶ。その後、選んだポケモン全員の上から、それぞれ「進化カード」を好きなだけはがして退化させる。はがしたカードは、手札にもどす。",
			},
		},
		{
			name: { ja: "やどりぎのタネ" },
			damage: 20,
			cost: ["Grass"],
			effect: {
				ja: "このポケモンのHPを「20」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558654,
			},
		},
	],

	retreat: 1,
	rarity: "Rare Holo",
	dexId: [251],
};

export default card;
