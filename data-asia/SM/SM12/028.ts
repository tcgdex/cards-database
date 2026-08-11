import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "トゲデマル",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		ja: "１４本の 背中の ハリの 毛は びっくりしたり 興奮することが あると 勝手に 逆立ってしまう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "なかまをよぶ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札にあるたねポケモンを2枚まで、ベンチに出す。そして山札を切る。",
			},
		},
		{
			name: { ja: "でんじスパーク" },
			cost: ["Lightning"],
			effect: {
				ja: "相手のポケモン1匹に、20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554828,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [777],
};

export default card;
