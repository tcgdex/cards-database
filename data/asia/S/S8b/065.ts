import { Card } from "models/database/card";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ジュペッタ",
		'zh-tw': "詛咒娃娃",
	},

	illustrator: "Megumi Higuchi",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		'ja-jp': "捨てられた 怨念で 生まれる。 大切に されると 満足して 元の ヌイグルミに 戻るという。",
		'zh-tw': "誕生自遭到捨棄時的怨念。據說只要讓牠感覺自己受到重視， 牠就會滿意地變回原本的玩偶。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "かくごのうらみ",
				'zh-tw': "覺悟怨恨",
			},
			damage: "20×",
			cost: ["Psychic"],
			effect: {
				'ja-jp': "このポケモンにダメカンを7個までのせ、のせた数×20ダメージ。",
				'zh-tw': "在這隻寶可夢身上放置最多7個傷害指示物，造成放置的數量×20點傷害。",
			},
		},
		{
			name: {
				'ja-jp': "ぶきみなひかり",
				'zh-tw': "不祥之光",
			},
			damage: 50,
			cost: ["Psychic", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをこんらんにする。",
				'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586581,
				tcgplayer: 571318,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578385,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "カゲボウズ",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "None",
	dexId: [354],
};

export default card;
