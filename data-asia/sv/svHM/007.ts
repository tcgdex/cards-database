import { Card } from "../../../interfaces"
import Set from "../svHM"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大宇怪",
		th: "โอเบ็ม",
		id: "Beheeyem"
	},

	illustrator: "Shinya Komatsu",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		'zh-tw': "如果大宇怪出現在牧場裡，那麼就會有１隻毛毛角羊 在不知不覺間消失。",
		th: "ไบวูลูจะหายไป 1 ตัวโดยไม่ทันรู้ตัวจากฟาร์มที่โอเบ็มปรากฏตัว",
		id: "Entah sejak kapan seekor Dubwool menghilang dari peternakan yang didatangi oleh Beheeyem."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "宇宙律動",
			th: "คอสโมบีต",
			id: "Cosmobeat"
		},

		effect: {
			'zh-tw': "造成自己的場上寶可夢的數量×20點傷害。",
			th: "แดเมจจะเท่ากับจำนวนโปเกมอนบนกระดานฝ่ายเรา x20",
			id: "Serangan ini memberikan kerusakan sejumlah 20 untuk tiap Pokémon di Arena sendiri."
		},

		damage: "20×",
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card