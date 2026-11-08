import { Card } from "models/database/card";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ミロカロス",
	},

	illustrator: "chibi",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		'ja-jp': "もっとも 美しい ポケモンとも 呼ばれ 多くの 芸術家に インスピレーションを 与えてきた。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ウォーターアロー" },
			cost: ["Water"],
			effect: {
				'ja-jp': "相手のポケモン1匹に、50ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "メロウウェーブ" },
			damage: 60,
			cost: ["Water", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをねむりにする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 673387,
				tcgplayer: 570833,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヒンバス",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Character Rare",
	dexId: [350],
};

export default card;
