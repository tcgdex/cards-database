import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "ลูคาริโอ",
		id: "Lucario"
	},

	illustrator: "Nurikabe",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		th: "ว่ากันว่าสามารถมองเห็นอีกฝ่ายที่ซ่อนตัวอยู่ได้จากการจับคลื่นพลัง",
		id: "Dikatakan bahwa Lucario dapat melihat sosok lawan yang tak kasat mata dengan mendeteksi gelombang aura."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "อเวนจ์นักเคิล",
			id: "Avenge Knuckle"
		},

		effect: {
			th: "ในเทิร์นก่อนของฝ่ายตรงข้าม ถ้าโปเกมอน[ต่อสู้]ฝ่ายเรา[หมดสภาพ] ด้วยแดเมจของท่าต่อสู้ การโจมตีนี้จะเพิ่มแดเมจอีก 120",
			id: "Jika pada giliran lawan sebelumnya, ada Pokémon {Petarung} sendiri yang KO karena kerusakan akibat serangan, kerusakan yang diberikan bertambah sejumlah 120."
		},

		damage: "30+",
		cost: ["Fighting"]
	}, {
		name: {
			th: "เร่งความเร็วพุ่งชน",
			id: "Tusukan Akselerasi"
		},

		effect: {
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ [เร่งความเร็วพุ่งชน] ไม่ได้",
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan Tusukan Akselerasi."
		},

		damage: 120,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card