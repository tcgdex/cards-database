import { Card } from "../../../interfaces";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		ja: "ゼルネアス",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 130,
	types: ["Fairy"],

	description: {
		ja: "永遠の 命を 分け与えると 言われている。 樹木の 姿で １０００年 眠り 復活する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みちびく" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札にあるサポートを1枚、相手に見せてから、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "ブライトホーン" },
			damage: 130,
			cost: ["Fairy", "Fairy", "Fairy"],
			effect: {
				ja: "次の自分の番、このポケモンは「ブライトホーン」が使えない。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560282,
			},
		},
	],

	retreat: 2,
	rarity: "Rare",
	dexId: [716],
};

export default card;
