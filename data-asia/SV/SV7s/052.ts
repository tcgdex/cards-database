import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "โบรโรโรมex",
		id: "Revavroom ex"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 280,
	types: ["Lightning"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			th: "แอกเซลแฟลช",
			id: "Accel Flash"
		},

		effect: {
			th: "เทิร์นนี้ ถ้าโปเกมอนนี้ออกจากเบนช์มาที่ตำแหน่งต่อสู้ การโจมตีนี้จะเพิ่มแดเมจอีก 120",
			id: "Jika pada giliran ini, Pokémon ini masuk dari Cadangan ke Arena Bertarung, kerusakan yang diberikan bertambah sejumlah 120."
		},

		damage: "20+",
		cost: ["Metal"]
	}, {
		name: {
			th: "สปีดเบรก",
			id: "Speed Break"
		},

		effect: {
			th: "ทิ้งโปเกมอนนี้ และการ์ดทั้งหมดที่ติดอยู่ ที่ตำแหน่งทิ้งการ์ด",
			id: "Buang Pokémon ini dan semua kartu yang dikenakannya ke Trash."
		},

		damage: 250,
		cost: ["Metal", "Metal", "Metal"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card