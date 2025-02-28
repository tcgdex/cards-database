import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Palkia",
		th: "พัลเกีย"
	},

	illustrator: "danciao",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],

	description: {
		id: "Dikatakan bahwa Palkia hidup di celah dimensi paralel. Pokémon yang muncul dalam mitologi.",
		th: "ว่ากันว่าอาศัยอยู่ในช่องว่างระหว่างมิติคู่ขนาน เป็นโปเกมอนที่ปรากฏ ตัวในเทพนิยาย"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Space Crush",
			th: "สเปซแครช"
		},

		effect: {
			id: "Serangan ini memberikan kerusakan sejumlah 40 untuk tiap Energi Dasar yang dikenakan pada Pokémon ini.",
			th: "แดเมจจะเท่ากับจำนวนพลังงานพื้นฐานที่ติดอยู่กับโปเกมอนนี้ x40"
		},

		damage: "40×",
		cost: ["Grass", "Water"]
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card