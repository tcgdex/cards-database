import { Card } from "../../../interfaces";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		ja: "アローララッタ",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "コラッタを 率い グループをつくる。 グループには テリトリーが あり 餌を 巡り 抗争に なる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "きょうかまえば" },
			damage: "10+",
			cost: [],
			effect: {
				ja: "このポケモンに「ポケモンのどうぐ」がついているなら、50ダメージ追加。",
			},
		},
		{
			name: { ja: "ひっさつまえば" },
			damage: 60,
			cost: ["Darkness"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561035,
			},
		},
	],

	evolveFrom: {
		ja: "アローラコラッタ",
	},

	retreat: 3,
	rarity: "Uncommon",
	dexId: [20],
};

export default card;
