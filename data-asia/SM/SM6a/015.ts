import { Card } from "../../../interfaces";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		ja: "コイキング",
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],

	description: {
		ja: "無闇に 跳ねて すぐ 襲われるが コイキングの おかげで 多くの ポケモンが 生き延びられると いう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みずしぶき" },
			damage: "10+",
			cost: ["Water"],
			effect: {
				ja: "コインを1回投げオモテなら、10ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559255,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [129],
};

export default card;
