import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "แรคอยล์",
		'id-id': "Magneton"
	},

	illustrator: "kurumitsu",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		'th-th': "คอยล์ 3 ตัวเชื่อมต่อกันด้วยพลังงานแม่เหล็กแรงสูง หากเข้าไปใกล้จะเกิดอาการหูอื้อขั้นรุนแรง",
		'id-id': "Tiga Magnemite yang terhubung oleh kekuatan magnet yang kuat. Telingamu akan sakit oleh dengungan kuat jika mendekati Magneton."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "พุ่งเข้าชน",
			'id-id': "Serudukan"
		},

		damage: 30,
		cost: ["Lightning"]
	}, {
		name: {
			'th-th': "อิเล็กทริกบอล",
			'id-id': "Electro Ball"
		},

		damage: 60,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card