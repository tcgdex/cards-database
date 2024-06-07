import { Card } from "../../../interfaces"
import Set from "../SVHK"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "故勒頓ex",
		th: "โคไรดอนex",
		id: "Koraidon ex"
	},

	illustrator: "PLANETA Igarashi",
	category: "Pokemon",
	hp: 230,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'zh-tw': "復仇懲處",
			th: "ชำระโทษแค้น",
			id: "Palu Godam Ganjaran"
		},

		effect: {
			'zh-tw': "增加這隻寶可夢身上放置的傷害指示物的數量×10點傷害。",
			th: "แดเมจจะเพิ่มตามจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนนี้ x10",
			id: "Kerusakan yang diberikan bertambah sejumlah 10 untuk tiap Token Kerusakan yang dimiliki Pokémon ini."
		},

		damage: "20+",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "凱撒衝撞",
			th: "ไคเซอร์แท็กเกิล",
			id: "Kaiser Tackle"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到60點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 60 ด้วย",
			id: "Pokémon ini juga menerima kerusakan sejumlah 60."
		},

		damage: 280,
		cost: ["Fire", "Fighting", "Fighting"]
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card