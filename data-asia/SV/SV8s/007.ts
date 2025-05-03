import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Vivillon",
		th: "วิวิญอง"
	},

	illustrator: "Amelicart",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		id: "Vivillon yang terlahir di wilayah ajaib. Pokémon ini bertarung dengan menyebarkan sisik toksik berwarna-warni dari sayapnya.",
		th: "เกิดในบริเวณที่น่าพิศวง ต่อสู้โดยการโปรยเกล็ดพิษสีสดใสออกมาจาก ปีก"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			id: "Evolution Powder",
			th: "อีโวพาวเดอร์"
		},

		effect: {
			id: "Pilih kartu yang merupakan evolusi dari tiap-tiap Pokémon Cadangan sendiri masing-masing 1 lembar dari Deck sendiri, lalu letakkan pada tiap-tiap Pokémon tersebut untuk melakukan evolusi. Kemudian, kocok Deck.",
			th: "เลือกการ์ดแต่ละใบที่จะวิวัฒนาการจากโปเกมอนบนเบนช์ฝ่ายเราทุกตัว ตัวละ 1 ใบจากสำรับการ์ดฝ่ายเรา วางบนโปเกมอนแต่ละตัวเพื่อวิวัฒนาการ แล้วสับ สำรับการ์ด"
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Cutter Wind",
			th: "คัตเตอร์วินด์"
		},

		damage: 90,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card