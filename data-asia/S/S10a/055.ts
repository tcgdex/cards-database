import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒスイ ヌメルゴン",
		'zh-tw': "洗翠 黏美龍",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 160,
	types: ["Dragon"],

	description: {
		ja: "金属の殻の 剛柔を 自在に 操る。 孤独を 厭い 執念深く 好いた者が 己から 離れると 怒り 荒ぶる。",
		'zh-tw': "能自在操縱可剛可柔的金屬外殼。性情執著且厭惡孤獨，一旦喜愛的 對象離開自己便會怒不可遏。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "はがねのおやど",
				'zh-tw': "鋼之歸宿",
			},
			effect: {
				ja: "このポケモンがいるかぎり、[M]エネルギーがついている自分のたねポケモン全員は、相手の「ポケモンV」からワザのダメージを受けない。",
				'zh-tw': "只要這隻寶可夢在場上，自己的所有身上附有【鋼】能量的【基礎】寶可夢，不會受到對手的「寶可夢【V】」招式的傷害。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ヘビーインパクト",
				'zh-tw': "重磅衝擊",
			},
			damage: 140,
			cost: ["Water", "Metal", "Colorless"],
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 656378,
				tcgplayer: 570718,
			},
		},
	],

	evolveFrom: {
		ja: "ヒスイ ヌメイル",
	},

	retreat: 3,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [706],
};

export default card;
