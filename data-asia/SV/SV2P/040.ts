import { Card } from "../../../interfaces"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		ja: "コノヨザルex",
		'zh-tw': "棄世猴ex",
		th: "โคโนะโยซารุex",
		id: "Annihilape ex"
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
			ja: "アンガーグラッジ",
			'zh-tw': "憤懣恨怨",
			th: "พิโรธโกรธแค้น",
			id: "Anger Grudge"
		},

		damage: "20×",

		effect: {
			ja: "このポケモンにダメカンを12個までのせ、のせた数×20ダメージ。",
			'zh-tw': "在這隻寶可夢身上放置最多12個傷害指示物，造成放置的數量×20點傷害。",
			th: "วางตัวนับแดเมจได้สูงสุด 12 ตัวบนโปเกมอนนี้ แดเมจจะเท่ากับจำนวนที่วาง x20",
			id: "Letakkan paling banyak 12 Token Kerusakan pada Pokémon ini, serangan ini memberikan kerusakan sejumlah 20 untuk tiap Token Kerusakan yang diletakkan."
		}
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "ちきゅうなげ",
			'zh-tw': "地球上投",
			th: "ขว้างใส่โลก",
			id: "Bantingan Keras"
		},

		damage: 150
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card