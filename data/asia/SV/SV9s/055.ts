import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "ดันบัล",
		id: "Beldum"
	},

	illustrator: "Izucch",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		th: "พลังแม่เหล็กที่ออกมาจากร่างกายและพลังแม่เหล็กบนโลกจะผลักกัน ทำให้มันลอยอยู่ในท้องฟ้า",
		id: "Ia membuat gaya magnet yang keluar dari tubuhnya dan gaya magnet di atas tanah tolak-menolak lalu mengambang di udara."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "โจมตีหมุนวน",
			id: "Serangan Berputar"
		},

		damage: 10,
		cost: ["Psychic"]
	}, {
		name: {
			th: "ลำแสง",
			id: "Beam"
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