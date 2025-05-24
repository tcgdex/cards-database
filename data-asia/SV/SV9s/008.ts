import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "เชมิน",
		id: "Shaymin"
	},

	illustrator: "tono",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		th: "ว่ากันว่าจะบินเพื่อส่งความรู้สึกขอบคุณต่อฤดูที่ดอกกราซิเดียเบ่งบาน",
		id: "Kabarnya Shaymin terbang pergi pada musim bunga Gracidea bermekaran untuk menyampaikan rasa syukur."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			th: "ม่านดอกไม้",
			id: "Tirai Bunga"
		},

		effect: {
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่ โปเกมอนบนเบนช์ฝ่ายเราทุกตัว (ยกเว้น [โปเกมอน ที่มีกฎ]) จะไม่ได้รับแดเมจของท่าต่อสู้จากฝ่ายตรงข้าม",
			id: "Selama Pokémon ini ada di Arena, semua Pokémon Cadangan sendiri (selain Pokémon yang memiliki Peraturan) tidak menerima kerusakan akibat serangan lawan."
		}
	}],

	attacks: [{
		name: {
			th: "ดีด",
			id: "Tendangan Penghempas"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card