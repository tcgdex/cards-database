import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "ฟุคุซึโร",
		id: "Dartrix"
	},

	illustrator: "Tetsu Kayama",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		th: "ซัดขนนกแหลมคมราวกับมีดจนถูกเรียกว่าขนใบมีดใส่ศัตรูอย่างต่อเนื่อง ขนนกจะทะลวงจุดตายของอีกฝ่ายได้อย่างแน่นอน",
		id: "Dartrix melemparkan bulu seperti pisau yang disebut Bulu Pisau dengan terus-menerus dan secara pasti menembak tembus kelemahan musuh."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "ปีกสามัคคี",
			id: "Sayap Bersatu Padu"
		},

		effect: {
			th: "แดเมจจะเท่ากับจำนวนการ์ดโปเกมอนที่มีท่าต่อสู้ [ปีกสามัคคี] ที่อยู่บนตำแหน่งทิ้งการ์ดฝ่ายเรา x20",
			id: "Serangan ini memberikan kerusakan sejumlah 20 untuk tiap lembar Pokémon yang memiliki serangan Sayap Bersatu Padu yang ada di Trash sendiri."
		},

		damage: "20×",
		cost: ["Colorless"]
	}, {
		name: {
			th: "คัตเตอร์วินด์",
			id: "Cutter Wind"
		},

		damage: 30,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card