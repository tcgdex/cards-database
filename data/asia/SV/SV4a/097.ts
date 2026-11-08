import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ボチ",
		'zh-tw': "墓仔狗",
		'th-th': "โบจิ",
		'id-id': "Greavard"
	},

	illustrator: "yuu",
	category: "Pokemon",
	dexId: [971],
	hp: 70,
	types: ["Psychic"],

	description: {
		'ja-jp': "人懐っこくて 寂しがり。 ちょっと かまっただけでも いつまでも 後を ついてくるぞ。",
		'zh-tw': "愛親近人，害怕寂寞。就算只跟牠玩了一下下， 牠也會一直跟在後面。",
		'th-th': "เชื่องกับมนุษย์และขี้เหงา หากให้ความสนใจหรือดูแลมันแม้เพียงเล็กน้อยมันจะตามติดไปตลอด",
		'id-id': "Sifat Greavard jinak dan mudah kesepian. Pokémon ini akan terus mengikutimu meskipun kamu hanya memberinya sedikit perhatian."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'ja-jp': "おはかであそぶ",
			'zh-tw': "墓地遊玩",
			'th-th': "เล่นในหลุมศพ",
			'id-id': "Main di Kuburan"
		},

		damage: "10×",

		effect: {
			'ja-jp': "自分のトラッシュにあるポケモンの枚数×10ダメージ。",
			'zh-tw': "造成自己的棄牌區的【超】寶可夢卡的張數×10點傷害。",
			'th-th': "แดเมจจะเท่ากับจำนวนการ์ดโปเกมอน[พลังจิต]ที่อยู่บนตำแหน่งทิ้งการ์ดฝ่ายเรา x10",
			'id-id': "Serangan ini memberikan kerusakan sejumlah 10 untuk tiap lembar Pokémon {Psychic} yang ada di Trash sendiri."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746479,
				tcgplayer: 567498,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577350,
			},
		},
	],

	retreat: 2,
	regulationMark: "G"
}

export default card