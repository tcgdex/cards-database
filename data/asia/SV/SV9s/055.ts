import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ดันบัล",
		'id-id': "Beldum"
	},

	illustrator: "Izucch",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'th-th': "พลังแม่เหล็กที่ออกมาจากร่างกายและพลังแม่เหล็กบนโลกจะผลักกัน ทำให้มันลอยอยู่ในท้องฟ้า",
		'id-id': "Ia membuat gaya magnet yang keluar dari tubuhnya dan gaya magnet di atas tanah tolak-menolak lalu mengambang di udara."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "โจมตีหมุนวน",
			'id-id': "Serangan Berputar"
		},

		damage: 10,
		cost: ["Psychic"]
	}, {
		name: {
			'th-th': "ลำแสง",
			'id-id': "Beam"
		},

		damage: 30,
		cost: ["Psychic", "Psychic"]
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
	regulationMark: "I"
}

export default card