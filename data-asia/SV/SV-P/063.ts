import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "シャワーズ",
		'zh-tw': "鹽石巨靈ex",
	},

	illustrator: "YU NAGABA",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		ja: "水辺に 棲むが 尻尾には 魚のような ひれが 残っていて 人魚と 間違う 人もいる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "アクアバレット",
				'zh-tw': "障礙之錘",
			},
			damage: 90,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "相手のベンチポケモン1匹にも、20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-60」點。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 708478,
				tcgplayer: 587821,
			},
		},
	],

	evolveFrom: {
		ja: "イーブイ",
	},

	retreat: 2,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [134],
};

export default card;
