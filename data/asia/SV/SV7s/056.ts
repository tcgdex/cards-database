import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "สลีปเปอร์",
		id: "Hypno"
	},

	illustrator: "Masako Tomii",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		th: "แกว่งลูกตุ้มที่พกเอาไว้ตลอดเวลาด้วยจังหวะคงที่ พอเข้าใกล้แล้วไม่รู้ทำไมถึงง่วงนอน",
		id: "Dalam kondisi apa pun, Hypno selalu menggoyangkan pendulum yang dibawanya dengan ritme yang sama. Entah kenapa jadi mengantuk jika mendekatinya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "ฝันกลางวัน",
			id: "Mimpi di Siang Bolong"
		},

		effect: {
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม ถ้าฝ่ายตรงข้ามติดการ์ดพลังงานจากบนมือ ที่โปเกมอนที่ได้รับท่าต่อสู้นี้แล้ว จะจบเทิร์นฝ่ายตรงข้าม",
			id: "Pada giliran lawan berikutnya, jika lawan mengenakan Energi dari Kartu Pegangan pada Pokémon yang menerima serangan ini, giliran lawan akan selesai."
		},

		damage: 80,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card