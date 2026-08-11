import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Glimmet",
		th: "คิราเมะ"
	},

	illustrator: "Eri Kamei",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		id: "Kristal zat racun Glimmet terlihat seperti kelopak bunga. Pokémon ini melindungi diri dengan menyebarkan racun layaknya serbuk bunga.",
		th: "ผลึกของสารพิษดูราวกับกลีบดอกไม้ โรยผงพิษเหมือนเกสรดอกไม้ เพื่อป้องกันตัวเอง"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Lontaran Batu",
			th: "ปาหิน"
		},

		effect: {
			id: "Kerusakan akibat serangan ini tidak terpengaruh oleh Resistansi.",
			th: "แดเมจของท่าต่อสู้นี้จะไม่นำความต้านทานมาคิด"
		},

		damage: 10,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card