import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "アリゲイツ",
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "キバは 抜けても 次から 次に 生えてくる。いつも 口の中には ４８本の キバが そろっている。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ぎゃくふんしゃ" },
			damage: 30,
			cost: ["Water"],
			effect: {
				ja: "このポケモンをベンチポケモンと入れ替える。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863462,
			},
		},
	],

	evolveFrom: {
		ja: "ワニノコ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [159],
};

export default card;
