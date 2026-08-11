import { Card } from "models/database/card"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "コノヨザルex",
		'zh-tw': "棄世猴ex",
		'th-th': "โคโนะโยซารุex",
		'id-id': "Annihilape ex"
	},

	illustrator: "PLANETA Hiiragi",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 320,
	types: ["Fighting"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'ja-jp': "アンガーグラッジ",
			'zh-tw': "憤懣恨怨",
			'th-th': "พิโรธโกรธแค้น",
			'id-id': "Anger Grudge"
		},

		damage: "20×",

		effect: {
			'ja-jp': "このポケモンにダメカンを12個までのせ、のせた数×20ダメージ。",
			'zh-tw': "在這隻寶可夢身上放置最多12個傷害指示物，造成放置的數量×20點傷害。",
			'th-th': "วางตัวนับแดเมจได้สูงสุด 12 ตัวบนโปเกมอนนี้ แดเมจจะเท่ากับจำนวนที่วาง x20",
			'id-id': "Letakkan paling banyak 12 Token Kerusakan pada Pokémon ini, serangan ini memberikan kerusakan sejumlah 20 untuk tiap Token Kerusakan yang diletakkan."
		}
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			'ja-jp': "ちきゅうなげ",
			'zh-tw': "地球上投",
			'th-th': "ขว้างใส่โลก",
			'id-id': "Bantingan Keras"
		},

		damage: 150
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 705273,
				tcgplayer: 567797,
			},
		},
	],

	retreat: 2,
	regulationMark: "G"
}

export default card