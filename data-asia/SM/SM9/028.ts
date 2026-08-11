import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "ギャラドス",
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	description: {
		ja: "破壊光線を はきまくり あたり 一面を 焼き尽くす。 破壊の神と 呼ぶ 地方もある。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "だいぎんじょう" },
			damage: "30+",
			cost: ["Water"],
			effect: {
				ja: "自分の山札を上から7枚オモテにする。その中にある[水]エネルギーの数x30ダメージ追加し、その[水]エネルギーを山札にもどして切る。残りのカードはトラッシュする。",
			},
		},
		{
			name: { ja: "はかいこうせん" },
			damage: 100,
			cost: ["Water", "Water", "Water"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558306,
			},
		},
	],

	evolveFrom: {
		ja: "コイキング",
	},

	retreat: 4,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [130],
};

export default card;
