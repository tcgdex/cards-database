import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "โยเทอรี",
		'id-id': "Lillipup"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		'th-th': "ฉลาดกว่าเด็กโดยทั่วไป จะไม่ลืมความรักและการกระทำใด ๆ ที่เคยได้รับ",
		'id-id': "Lillipup jauh lebih pintar daripada anak kecil pada umumnya. Pokémon ini tidak akan melupakan cinta dan derita yang pernah dialaminya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "เตะกลับหลัง",
			'id-id': "Tendangan Belakang"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card