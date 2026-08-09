import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ユキカブリ",
		'zh-tw': "雪笠怪",
		'zh-cn': "雪笠怪",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "寒い 季節は 山の ふもとまで 降りてくるが 春に なると 雪が 残る 山頂に 戻っていく。",
		'zh-tw': "在寒冷的季節裡會 移動到山腳下，一到春天就會 返回積雪尚存的山頂。",
		'zh-cn': "在寒冷的季節裡會 移動到山腳下，一到春天就會 返回積雪尚存的山頂。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "なぐる",
				'zh-tw': "打擊",
				'zh-cn': "打擊",
			},
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: {
				ja: "つらら",
				'zh-tw': "冰柱",
				'zh-cn': "冰柱",
			},
			damage: 50,
			cost: ["Water", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821858,
				tcgplayer: 628667,
			},
		},
	],

	retreat: 3,
	regulationMark: "I",
	rarity: "Common",
	dexId: [459],
};

export default card;
