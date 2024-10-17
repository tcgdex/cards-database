import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "ทัททู",
		id: "Horsea"
	},

	illustrator: "Shimaris Yukichi",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		th: "อาศัยอยู่ในทะเลที่มีกระแสน้ำสงบ เมื่อถูกโจมตีจะพ่นหมึกดำใส่แล้วใช้โอกาสนั้นหนี",
		id: "Horsea tinggal di laut yang aliran arusnya tenang. Jika diserang, Pokémon ini menembakkan tinta hitam pekat dan melarikan diri."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "อยู่นิ่ง ๆ",
			id: "Tidak Bergerak"
		},

		effect: {
			th: "ฟื้นฟู HP ของโปเกมอนนี้ [30]",
			id: "Pulihkan HP Pokémon ini sejumlah 30."
		},

		cost: ["Water"]
	}, {
		name: {
			th: "ครีบใบมีด",
			id: "Sirip Pemotong"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card