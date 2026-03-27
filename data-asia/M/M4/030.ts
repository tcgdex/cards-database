import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "エモンガ",
	},

	illustrator: "Kazumasa Yasukuni",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ちいさなおつかい" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から基本エネルギーを2枚まで選び、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "スカイリターン" },
			damage: 30,
			cost: ["Lightning"],
			effect: {
				ja: "このポケモンとついているカードを全て手札に戻す。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [587],
};

export default card;
