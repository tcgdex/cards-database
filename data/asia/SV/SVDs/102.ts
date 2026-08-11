import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "มาฟีทิฟ",
		'id-id': "Mabosstiff"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		'th-th': "ชอบเล่นกับเด็กมาก โดยปกติจะมีนิสัยอ่อนโยน แต่เมื่อถึงคราวต้องปกป้องครอบครัวจะมีสีหน้าเปลี่ยนไป",
		'id-id': "Mabosstiff sangat suka bermain dengan anak-anak. Biasanya Pokémon ini bersikap hangat, namun raut wajah berubah ketika melindungi keluarganya."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'th-th': "เสียงเห่าหอนข่มขวัญ",
			'id-id': "Lolongan Intimidasi"
		},

		effect: {
			'th-th': "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา สลับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามกับโปเกมอนบนเบนช์ {ฝ่ายตรงข้ามเลือกโปเกมอนที่จะวางบนตำแหน่งต่อสู้}",
			'id-id': "Dapat digunakan 1 kali pada giliran sendiri. Tukar Pokémon Bertarung lawan dengan Pokémon Cadangan. [Pokémon yang akan dimasukkan ke Arena Bertarung dipilih oleh lawan.]"
		}
	}],

	attacks: [{
		name: {
			'th-th': "ไวลด์แท็กเกิล",
			'id-id': "Wild Tackle"
		},

		effect: {
			'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 30 ด้วย",
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 30."
		},

		damage: 160,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card