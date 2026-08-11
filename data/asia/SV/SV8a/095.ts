import { Card } from "models/database/card"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ダストダス",
		'id-id': "Garbodor",
		'th-th': "ดัสต์ดาส",
		'zh-tw': "灰塵山",
		'zh-cn': "灰塵山"
	},

	illustrator: "Aya Kusube",
	rarity: "None",
	category: "Pokemon",
	dexId: [569],
	hp: 120,
	types: ["Darkness"],

	description: {
		'ja-jp': "右腕から 出す 毒液は 弱った 生物が 浴びれば 即死するほど 危険な シロモノ。",
		'id-id': "Cairan beracun yang dikeluarkan dari lengan kanan Garbodor sangat berbahaya sehingga makhluk hidup yang sedang lemah akan mati seketika jika bermandikan cairan tersebut.",
		'th-th': "ของเหลวพิษที่ออกมาจากแขนขวา ถ้าสิ่งมีชีวิตที่อ่อนแอโดนเข้าไปล่ะก็อันตรายถึงตายในทันที",
		'zh-tw': "從右臂噴出的毒液十分危險， 虛弱的生物只要一沾到， 立刻就會丟掉性命。",
		'zh-cn': "從右臂噴出的毒液十分危險， 虛弱的生物只要一沾到， 立刻就會丟掉性命。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'ja-jp': "なげすて",
			'id-id': "Lempar Buang",
			'th-th': "ปาทิ้ง",
			'zh-tw': "丟棄",
			'zh-cn': "丟棄"
		},

		damage: "50×",

		effect: {
			'ja-jp': "自分の手札から「ポケモンのどうぐ」を好きなだけトラッシュし、その枚数×50ダメージ。",
			'id-id': "Buang sesukanya Pokémon Tool dari Kartu Pegangan sendiri ke Trash, serangan ini memberikan kerusakan sejumlah 50 untuk tiap lembarnya.",
			'th-th': "ทิ้งการ์ด [ไอเท็มติดโปเกมอน] จากบนมือฝ่ายเราตามจำนวนที่ชอบที่ตำแหน่งทิ้งการ์ด แดเมจจะเท่ากับจำนวนการ์ดนั้น x50",
			'zh-tw': "從自己的手牌將任意數量的「寶可夢道具」卡丟棄，造成其張數×50點傷害。",
			'zh-cn': "從自己的手牌將任意數量的「寶可夢道具」卡丟棄，造成其張數×50點傷害。"
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ベノムヒット",
			'id-id': "Venom Hit",
			'th-th': "เวนอมฮิต",
			'zh-tw': "毒液一擊",
			'zh-cn': "毒液一擊"
		},

		damage: 80,

		effect: {
			'ja-jp': "相手のバトルポケモンをどくにする。",
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Racun.",
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ]",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
			'zh-cn': "將對手的戰鬥寶可夢【中毒】。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 803208,
				tcgplayer: 602483,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				tcgplayer: 604572,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 602484,
			},
		},
	],

	retreat: 3,
	regulationMark: "G"
}

export default card