import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Slakoth",
		th: "นามาเคโร"
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		id: "Sosok Slakoth yang bermalas-malasan merangsang rasa malas orang yang melihatnya.",
		th: "สภาพเกียจคร้านของนามาเคโรนั้นกระตุ้นความขี้เกียจของคนที่มองดู เป็นอย่างมาก"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Bersantai",
			th: "ทำตัวเรื่อยเฉื่อย"
		},

		effect: {
			id: "Pulihkan HP Pokémon ini sejumlah 60. Pada giliran sendiri berikutnya, Pokémon ini tidak dapat Mundur.",
			th: "ฟื้นฟู HP ของโปเกมอนนี้ [60] เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะหนี ไม่ได้"
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card