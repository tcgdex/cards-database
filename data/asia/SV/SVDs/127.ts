import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "บัฟฟรอน",
		'id-id': "Bouffalant"
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		'th-th': "อยู่กันเป็นฝูงประมาณ 20 ตัว ขนบนหัวของบัฟฟรอนที่หักหลังฝูงจะร่วงโดยไม่รู้สาเหตุ",
		'id-id': "Pokémon ini hidup berkelompok dengan jumlah sekitar 20 ekor. Bouffalant yang mengkhianati kelompoknya entah kenapa rambut kepalanya rontok."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'th-th': "แอโฟรการ์ด",
			'id-id': "Afro Guard"
		},

		effect: {
			'th-th': "แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-20]",
			'id-id': "Kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 20."
		}
	}],

	attacks: [{
		name: {
			'th-th': "แดเมจรัช",
			'id-id': "Damage Rush"
		},

		effect: {
			'th-th': "ทอยเหรียญจนกว่าจะออกก้อย แดเมจจะเพิ่มตามจำนวนครั้งที่ออกหัว x30",
			'id-id': "Lempar koin hingga hasilnya sisi belakang. Kerusakan yang diberikan bertambah sejumlah 30 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "50+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card