import { Card } from "models/database/card";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "クリムガン",
		'zh-tw': "赤面龍",
	},

	illustrator: "Ryo Ueda",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],

	description: {
		'ja-jp': "凶暴で ずる賢い。 ほかの ポケモンが 掘った 巣穴を 奪って すみかにする。",
		'zh-tw': "性情凶暴且狡猾。會搶奪其他寶可夢挖好的巢穴，來當作是自己的窩。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "リベンジ",
				'zh-tw': "報復",
			},
			damage: "40+",
			cost: ["Fire", "Water"],
			effect: {
				'ja-jp': "前の相手の番に、ワザのダメージで、自分のポケモンがきぜつしていたなら、120ダメージ追加。",
				'zh-tw': "若在上個對手的回合，自己的寶可夢因招式的傷害而【氣絕】了，則增加120點傷害。",
			},
		},
		{
			name: {
				'ja-jp': "ドラゴンクロー",
				'zh-tw': "龍爪",
			},
			damage: 120,
			cost: ["Fire", "Water", "Colorless"],
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586637,
				tcgplayer: 571374,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578407,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "None",
	dexId: [621],
};

export default card;
