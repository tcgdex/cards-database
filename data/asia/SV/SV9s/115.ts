import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ออนเวิร์น",
		'id-id': "Noivern"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		'th-th': "สามารถปล่อยคลื่นเสียงความถี่สูงที่ทำให้หินขนาดมหึมาแตกเป็นผุยผง ได้ เป็นโปเกมอนที่มีนิสัยโหดร้าย",
		'id-id': "Noivern mengeluarkan gelombang ultrasonik yang dapat menghancurkan batu raksasa hingga berkeping-keping. Pokémon yang bersifat kejam."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'th-th': "จูนนิงเอคโค",
			'id-id': "Tuning Echo"
		},

		effect: {
			'th-th': "ถ้าจำนวนการ์ดบนมือฝ่ายเราเท่ากับจำนวนการ์ดบนมือฝ่ายตรงข้าม พลังงาน สำหรับใช้ [แพนิกฮาวล์] ของโปเกมอนนี้ ทั้งหมดจะหายไป",
			'id-id': "Jika jumlah Kartu Pegangan sendiri dan jumlah Kartu Pegangan lawan sama, Pokémon ini menjadi tidak membutuhkan Energi untuk menggunakan Panic Howl."
		}
	}],

	attacks: [{
		name: {
			'th-th': "แพนิกฮาวล์",
			'id-id': "Panic Howl"
		},

		effect: {
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน]",
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Pusing."
		},

		damage: 110,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	regulationMark: "I"
}

export default card