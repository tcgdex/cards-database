import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ゲコガシラ",
	},

	illustrator: "Nelnal",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "よびよせじゅつ" },
			cost: ["Water"],
			effect: {
				ja: "自分の山札からポケモンを3枚まで選び、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "アクアエッジ" },
			damage: 50,
			cost: ["Water", "Water"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	evolveFrom: {
		ja: "ケロマツ",
	},

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [657],
};

export default card;
