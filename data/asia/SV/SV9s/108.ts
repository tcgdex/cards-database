import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "เรชิรัม <ของ N>",
		'id-id': "Reshiram <N>"
	},

	illustrator: "rika",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],

	description: {
		'th-th': "ถูกเล่าขานในเทพนิยายว่า เมื่อมนุษย์เพิกเฉยต่อความเป็นจริงและจม อยู่ในความละโมบ มันจะใช้เปลวเพลิงแผดเผาดินแดนให้สิ้น",
		'id-id': "Terlukiskan pada kisah mitos dirinya yang membumihanguskan suatu negeri ketika orang-orangnya mengabaikan kebenaran dan dipenuhi oleh nafsu."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "พาวเวอร์เรจ",
			'id-id': "Power Rage"
		},

		effect: {
			'th-th': "แดเมจจะเท่ากับจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนนี้ x20",
			'id-id': "Serangan ini memberikan kerusakan sejumlah 20 untuk tiap Token Kerusakan yang dimiliki Pokémon ini."
		},

		damage: "20×",
		cost: ["Fire", "Lightning"]
	}, {
		name: {
			'th-th': "อินโนเซนต์เฟลม",
			'id-id': "Innocent Flame"
		},

		damage: 170,
		cost: ["Fire", "Fire", "Lightning", "Colorless"]
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card