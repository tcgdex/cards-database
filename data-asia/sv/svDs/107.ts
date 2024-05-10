import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "เมลตัน",
		id: "Meltan"
	},

	illustrator: "Nobuhiro Imagawa",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		th: "อาศัยอยู่รวมกันเป็นฝูง เมื่อเวลามาถึง เมลตันตัวที่แข็งแกร่งตัวหนึ่งจะดูดกลืนผองเพื่อนเข้าไปในตัวแล้ววิวัฒนาการ",
		id: "Pokémon yang hidup secara berkelompok. Tetapi ketika saatnya tiba, satu Meltan yang kuat akan menyerap kawan-kawannya dan berevolusi."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "หลอมละลาย",
			id: "Melarutkan"
		},

		damage: 20,
		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card