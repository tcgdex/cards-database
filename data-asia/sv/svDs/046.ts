import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "แรคอยล์",
		id: "Magneton"
	},

	illustrator: "kurumitsu",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		th: "คอยล์ 3 ตัวเชื่อมต่อกันด้วยพลังงานแม่เหล็กแรงสูง หากเข้าไปใกล้จะเกิดอาการหูอื้อขั้นรุนแรง",
		id: "Tiga Magnemite yang terhubung oleh kekuatan magnet yang kuat. Telingamu akan sakit oleh dengungan kuat jika mendekati Magneton."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "พุ่งเข้าชน",
			id: "Serudukan"
		},

		damage: 30,
		cost: ["Lightning"]
	}, {
		name: {
			th: "อิเล็กทริกบอล",
			id: "Electro Ball"
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