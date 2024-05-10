import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "พาม็อต",
		id: "Pawmo"
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		th: "ใช้ศิลปะการต่อสู้ที่มีเอกลักษณ์โดยการใช้ฝ่ามือจู่โจมไปพลางปล่อยไฟฟ้าจากอุ้งมืออาบคู่ต่อสู้",
		id: "Pawmo bertarung menggunakan seni bela diri yang khas. Sambil menambahkan pukulan dengan telapak tangannya, Pokémon ini memberikan serangan listrik dari bantalan tangannya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "ประกายไฟ",
			id: "Berpijar-pijar"
		},

		damage: 20,
		cost: ["Lightning"]
	}, {
		name: {
			th: "อิเล็กโทรบูลเล็ต",
			id: "Electric Bullet"
		},

		effect: {
			th: "โปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว ก็จะได้รับแดเมจ 30 ด้วย {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			id: "Serangan ini juga memberikan kerusakan sejumlah 30 kepada 1 Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		damage: 50,
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card