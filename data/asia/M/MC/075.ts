import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "リククラゲ",
	},

	illustrator: "DOM",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		ja: "森の奥に 集団で 暮らす コロニーを 作る。 よそ者が 近寄ることを ひどく 嫌う。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "メガドレイン" },
			damage: 30,
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "このポケモンのHPを「30」回復する。",
			},
		},
		{
			name: { ja: "ウィップスマッシュ" },
			damage: 90,
			cost: ["Grass", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863366,
			},
		},
	],

	evolveFrom: {
		ja: "ノノクラゲ",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [949],
};

export default card;
