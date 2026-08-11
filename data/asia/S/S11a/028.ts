import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ミロカロス",
		'zh-tw': "美納斯",
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		ja: "もっとも 美しい ポケモンとも 呼ばれ 多くの 芸術家に インスピレーションを 与えてきた。",
		'zh-tw': "也被稱為是最美的寶可夢。一直以來為無數的藝術家提供了靈感。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ウォーターアロー",
				'zh-tw': "水箭",
			},
			cost: ["Water"],
			effect: {
				ja: "相手のポケモン1匹に、50ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "對手的1隻寶可夢受到50點傷害。[在備戰區不計算弱點・抵抗力。]",
			},
		},
		{
			name: {
				ja: "メロウウェーブ",
				'zh-tw': "柔和波",
			},
			damage: 60,
			cost: ["Water", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
				'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 673025,
				tcgplayer: 570791,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 570879,
			},
		},
	],

	evolveFrom: {
		ja: "ヒンバス",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [350],
};

export default card;
