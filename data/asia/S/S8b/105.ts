import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル マッスグマ",
		'zh-tw': "伽勒爾 直衝熊",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		ja: "とても 好戦的な 性質。 自分より 格上の 相手にも 平気で 挑む むこうみず。",
		'zh-tw': "有著十分好戰的性情。即使是比自己強的對手也會魯莽地發起挑戰。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "つじぎり",
				'zh-tw': "暗襲要害",
			},
			damage: 20,
			cost: ["Darkness"],
			effect: {
				ja: "このポケモンをベンチポケモンと入れ替える。",
				'zh-tw': "將這隻寶可夢與備戰寶可夢互換。",
			},
		},
		{
			name: {
				ja: "ぶちかます",
				'zh-tw': "頭突",
			},
			damage: 70,
			cost: ["Darkness", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586621,
				tcgplayer: 571358,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578404,
			},
		},
	],

	evolveFrom: {
		ja: "ガラル ジグザグマ",
	},

	retreat: 2,
	regulationMark: "D",
	rarity: "None",
	dexId: [264],
};

export default card;
