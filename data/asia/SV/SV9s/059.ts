import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "เมเลซี <ของไดโกะ>",
		id: "Carbink <Steven>"
	},

	illustrator: "Ligton",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		th: "ตั้งแต่เกิดมาก็หลับใหลอยู่ใต้พื้นพิภพเป็นเวลาหลายร้อยล้านปี บางครั้ง ก็จะพบตัวมันตอนขุดถ้ำ",
		id: "Pokémon yang tertidur selama ratusan juta tahun di dasar tanah setelah lahir. Terkadang ia ditemukan saat gua digali."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			th: "สโตนพาเลซ",
			id: "Stone Palace"
		},

		effect: {
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่บนเบนช์ แดเมจของท่าต่อสู้ที่ [โปเกมอนของ ไดโกะ] ฝ่ายเราทุกตัว จะได้รับจากโปเกมอนฝ่ายตรงข้ามจะถูก [-30] แม้ จะมีโปเกมอนที่มีความสามารถนี้กี่ตัวก็ตาม เอฟเฟกต์นี้จะไม่เกิดผลซ้ำ",
			id: "Selama Pokémon ini ada di Cadangan, kerusakan akibat serangan dari Pokémon lawan yang diterima semua Pokémon Steven sendiri berkurang sejumlah 30. Efek ini tidak berlaku kelipatan meskipun ada Pokémon lain yang memiliki Ability yang sama."
		}
	}],

	attacks: [{
		name: {
			th: "เมจิคัลช็อต",
			id: "Magical Shot"
		},

		damage: 80,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card