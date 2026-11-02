import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "チコリータ",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "頭の 葉っぱで まわりの 温度や 湿度を 探る。 日差しを 浴びることが 大好き。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "プチドレイン" },
			damage: 10,
			cost: ["Grass"],
			effect: {
				ja: "このポケモンのHPを「10」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558642,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [152],
};

export default card;
