import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "โยเทอรี",
		id: "Lillipup"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		th: "ฉลาดกว่าเด็กโดยทั่วไป จะไม่ลืมความรักและการกระทำใด ๆ ที่เคยได้รับ",
		id: "Lillipup jauh lebih pintar daripada anak kecil pada umumnya. Pokémon ini tidak akan melupakan cinta dan derita yang pernah dialaminya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "เตะกลับหลัง",
			id: "Tendangan Belakang"
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