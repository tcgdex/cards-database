import { Card } from "../../../interfaces"
import Set from "../SVHK"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雄偉牙",
		th: "งายักษ์",
		id: "Great Tusk"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		'zh-tw': "近年曾經有人目擊到牠。雄偉牙這個名字來自於 某本書裡記載的生物。",
		th: "มีผู้พบเห็นเมื่อไม่กี่ปีที่ผ่านมานี้ ชื่องายักษ์นั้นได้มาจากชื่อของสิ่งมีชีวิตที่ระบุไว้ในหนังสือเล่มหนึ่ง",
		id: "Terdapat laporan kesaksian atas Pokémon ini dalam beberapa tahun terakhir. Nama Great Tusk diambil dari nama makhluk hidup yang tercantum dalam suatu buku."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "撞倒",
			th: "พุ่งชน",
			id: "Mendorong Jatuh"
		},

		damage: 30,
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			'zh-tw': "憤怒突擊",
			th: "เดือดแค้นประจัญบาน",
			id: "Menyerang Murka"
		},

		effect: {
			'zh-tw': "若自己的備戰寶可夢身上放置有傷害指示物，則增加80點傷害。",
			th: "ถ้าโปเกมอนบนเบนช์ฝ่ายเรามีตัวนับแดเมจวางอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 80",
			id: "Jika Pokémon Cadangan sendiri memiliki Token Kerusakan, kerusakan yang diberikan bertambah sejumlah 80."
		},

		damage: "80+",
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card