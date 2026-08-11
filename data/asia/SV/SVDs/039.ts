import { Card } from "../../../interfaces"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		th: "เกโคกาชิระ",
		id: "Frogadier"
	},

	illustrator: "Tonji Matsuno",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		th: "เรื่องตัวเบานั้นไม่แพ้ใคร สามารถปีนขึ้นยอดตึกที่สูงเกิน 600 เมตรได้ใน 1 นาที",
		id: "Kelincahan tubuh Frogadier tidak kalah dari siapa pun. Pokémon ini dapat mendaki hingga puncak menara dengan ketinggian lebih dari 600 meter dalam waktu satu menit."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "พลิ้ว",
			id: "Serangan Mundur"
		},

		effect: {
			th: "หากต้องการ สลับโปเกมอนนี้กับโปเกมอนบนเบนช์",
			id: "Pemain dapat menukar Pokémon ini dengan Pokémon Cadangan."
		},

		damage: 40,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card