import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "เนที",
		'id-id': "Natu"
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		'th-th': "เคลื่อนที่ด้วยการกระโดดหยอย ๆ เพราะปีกยังโตไม่เต็มที่ มักจะจ้องมองอะไรบางอย่างอยู่ตลอดเวลา",
		'id-id': "Karena sayapnya belum tumbuh sempurna, Natu berpindah dengan cara melompat. Pokémon ini selalu memandangi sesuatu."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "พุ่งชนสามครั้ง",
			'id-id': "Tusukan Tiga Kali"
		},

		effect: {
			'th-th': "ทอยเหรียญ 3 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x10",
			'id-id': "Lempar koin 3 kali. Serangan ini memberikan kerusakan sejumlah 10 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "10×",
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card