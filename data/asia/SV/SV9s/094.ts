import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ดันบัล <ของไดโกะ>",
		'id-id': "Beldum <Steven>"
	},

	illustrator: "Takeshi Nakamura",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		'th-th': "พลังแม่เหล็กที่ออกมาจากร่างกายและพลังแม่เหล็กบนโลกจะผลักกัน ทำให้มันลอยอยู่ในท้องฟ้า",
		'id-id': "Ia membuat gaya magnet yang keluar dari tubuhnya dan gaya magnet di atas tanah tolak-menolak lalu mengambang di udara."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "กระแทก",
			'id-id': "Menyeruduk"
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