import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "ดันบัลของไดโกะ",
		id: "Beldum <Steven>"
	},

	illustrator: "hncl",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		th: "พลังแม่เหล็กที่ออกมาจากร่างกายและพลังแม่เหล็กบนโลกจะผลักกัน ทำให้มันลอยอยู่ในท้องฟ้า"
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "กระแทก",
			id: "Menyeruduk"
		},

		damage: 30,
		cost: ["Metal", "Colorless"]
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
	regulationMark: "I"
}

export default card