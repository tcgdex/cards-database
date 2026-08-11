import { Card } from "models/database/card";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ジジーロン",
		'zh-tw': "老翁龍",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],

	description: {
		'ja-jp': "人懐っこく 心優しいが ひとたび 怒ると 強風を 巻き起こし すべてを なぎ倒す。",
		'zh-tw': "心地善良愛親近人，但只要生氣就會颳起強風吹倒一切。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "どつく",
				'zh-tw': "推擊",
			},
			damage: 30,
			cost: ["Colorless"],
		},
		{
			name: {
				'ja-jp': "ぎゃくじょう",
				'zh-tw': "怒火沖天",
			},
			damage: "70+",
			cost: ["Water", "Fighting"],
			effect: {
				'ja-jp': "自分のベンチポケモンにダメカンがのっているなら、90ダメージ追加。",
				'zh-tw': "若自己的備戰寶可夢身上放置有傷害指示物，則增加90點傷害。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571633,
				tcgplayer: 569370,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [780],
};

export default card;
