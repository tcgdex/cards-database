import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ダストダス",
		id: "Garbodor",
		th: "ดัสต์ดาส",
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
		ja: "右腕から 出す 毒液は 弱った 生物が 浴びれば 即死するほど 危険な シロモノ。",
		id: "Cairan beracun yang dikeluarkan dari lengan kanan Garbodor sangat berbahaya sehingga makhluk hidup yang sedang lemah akan mati seketika jika bermandikan cairan tersebut.",
		th: "ของเหลวพิษที่ออกมาจากแขนขวา ถ้าสิ่งมีชีวิตที่อ่อนแอโดนเข้าไปล่ะก็อันตรายถึงตายในทันที",
		'zh-tw': "從右臂噴出的毒液十分危險， 虛弱的生物只要一沾到， 立刻就會丟掉性命。",
		'zh-cn': "從右臂噴出的毒液十分危險， 虛弱的生物只要一沾到， 立刻就會丟掉性命。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "なげすて",
			id: "Lempar Buang",
			th: "ปาทิ้ง",
			'zh-tw': "丟棄",
			'zh-cn': "丟棄"
		},

		damage: "50×",

		effect: {
			ja: "自分の手札から「ポケモンのどうぐ」を好きなだけトラッシュし、その枚数×50ダメージ。",
			id: "Buang sesukanya Pokémon Tool dari Kartu Pegangan sendiri ke Trash, serangan ini memberikan kerusakan sejumlah 50 untuk tiap lembarnya.",
			th: "ทิ้งการ์ด [ไอเท็มติดโปเกมอน] จากบนมือฝ่ายเราตามจำนวนที่ชอบที่ตำแหน่งทิ้งการ์ด แดเมจจะเท่ากับจำนวนการ์ดนั้น x50",
			'zh-tw': "從自己的手牌將任意數量的「寶可夢道具」卡丟棄，造成其張數×50點傷害。",
			'zh-cn': "從自己的手牌將任意數量的「寶可夢道具」卡丟棄，造成其張數×50點傷害。"
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			ja: "ベノムヒット",
			id: "Venom Hit",
			th: "เวนอมฮิต",
			'zh-tw': "毒液一擊",
			'zh-cn': "毒液一擊"
		},

		damage: 80,

		effect: {
			ja: "相手のバトルポケモンをどくにする。",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Racun.",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ]",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
			'zh-cn': "將對手的戰鬥寶可夢【中毒】。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card