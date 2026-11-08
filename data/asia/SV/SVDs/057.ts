import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "พาม็อต",
		'id-id': "Pawmo"
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		'th-th': "ใช้ศิลปะการต่อสู้ที่มีเอกลักษณ์โดยการใช้ฝ่ามือจู่โจมไปพลางปล่อยไฟฟ้าจากอุ้งมืออาบคู่ต่อสู้",
		'id-id': "Pawmo bertarung menggunakan seni bela diri yang khas. Sambil menambahkan pukulan dengan telapak tangannya, Pokémon ini memberikan serangan listrik dari bantalan tangannya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "ประกายไฟ",
			'id-id': "Berpijar-pijar"
		},

		damage: 20,
		cost: ["Lightning"]
	}, {
		name: {
			'th-th': "อิเล็กโทรบูลเล็ต",
			'id-id': "Electric Bullet"
		},

		effect: {
			'th-th': "โปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว ก็จะได้รับแดเมจ 30 ด้วย {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			'id-id': "Serangan ini juga memberikan kerusakan sejumlah 30 kepada 1 Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
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