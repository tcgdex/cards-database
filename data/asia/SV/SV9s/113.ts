import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "โนโกก็อจจิex",
		id: "Dudunsparce ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 270,
	types: ["Colorless"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			th: "หางแห่งภัยพิบัติ",
			id: "Ekor Kemalangan"
		},

		effect: {
			th: "แดเมจจะเท่ากับจำนวน [โปเกมอน【ex】] บนกระดานฝ่ายตรงข้าม x60",
			id: "Serangan ini memberikan kerusakan sejumlah 60 untuk tiap Pokémon {ex} di Arena lawan."
		},

		damage: "60×",
		cost: ["Colorless"]
	}, {
		name: {
			th: "ดริลเบรก",
			id: "Drill Break"
		},

		effect: {
			th: "แดเมจของท่าต่อสู้นี้ จะไม่นำเอฟเฟกต์ที่มีผลอยู่กับโปเกมอนบนตำแหน่งต่อสู้ ฝ่ายตรงข้ามมาคิด",
			id: "Kerusakan akibat serangan ini tidak terpengaruh oleh efek yang sedang dialami Pokémon Bertarung lawan."
		},

		damage: 150,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card