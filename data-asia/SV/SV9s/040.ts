import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "บิริริดามา <ของนันจาโม>",
		id: "Voltorb <Mistika>"
	},

	illustrator: "Kazumasa Yasukuni",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		th: "เคลื่อนที่โดยการกลิ้ง ถ้าพื้นไม่สม่ำเสมอจะตกใจจนระเบิด",
		id: "Karena Voltorb berpindah-pindah dengan bergelinding, Pokémon ini akan meledak karena guncangan ketika melewati tanah yang tidak rata."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "เชนโบลต์",
			id: "Chain Bolt"
		},

		effect: {
			th: "แดเมจจะเพิ่มตามจำนวนพลังงาน[สายฟ้า]ที่ติดอยู่กับ [โปเกมอนของนันจาโม] ฝ่าย เราทุกตัว x20",
			id: "Kerusakan yang diberikan bertambah sejumlah 20 untuk tiap Energi {Listrik} yang dikenakan pada semua Pokémon Mistika sendiri."
		},

		damage: "20+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card