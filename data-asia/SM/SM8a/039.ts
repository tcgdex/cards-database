import { Card } from "../../../interfaces";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		ja: "コマタナ",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		ja: "自分が 傷ついても 気にせず 集団で 全身の 刃物を 食いこませ 相手を 攻撃する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "こうちょく" },
			cost: ["Metal"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
			},
		},
		{
			name: { ja: "ひっかく" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558613,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [624],
};

export default card;
