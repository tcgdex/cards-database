import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴーリキー",
		'zh-tw': "豪力",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		ja: "強靭な 肉体と 持久力 兼ね備えし 剛の者。 鍛錬を 何より 好み 開墾 普請など 進んで 手伝う。",
		'zh-tw': "兼具強健肉體與持久耐力的強者。熱愛鍛鍊，會主動 協助進行開墾、建築等工作。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "かいりき",
				'zh-tw': "怪力",
			},
			damage: 30,
			cost: ["Fighting"],
		},
		{
			name: {
				ja: "ちきゅうなげ",
				'zh-tw': "地球上投",
			},
			damage: 50,
			cost: ["Fighting", "Fighting"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 656343,
				tcgplayer: 570698,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577114,
			},
		},
	],

	evolveFrom: {
		ja: "ワンリキー",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [67],
};

export default card;
