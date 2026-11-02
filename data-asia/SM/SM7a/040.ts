import { Card } from "../../../interfaces";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		ja: "コバルオン",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	description: {
		ja: "鋼の 心と 体を 持つ。 人が ポケモンを 傷つけたとき 仲間とともに 人を こらしめた。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ガードプレス" },
			damage: 30,
			cost: ["Metal", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
			},
		},
		{
			name: { ja: "メタルアームズ" },
			damage: "80+",
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				ja: "このポケモンに「ポケモンのどうぐ」がついているなら、40ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558928,
			},
		},
	],

	retreat: 2,
	rarity: "Rare",
	dexId: [638],
};

export default card;
