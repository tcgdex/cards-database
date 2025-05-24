import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "รุนปัปปา",
		id: "Ludicolo"
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	description: {
		th: "ทั่วร่างมีระบบที่จะสร้างพลังงานออกมา เมื่อได้รับคลื่นเสียงของ จังหวะเพลงที่ครื้นเครง",
		id: "Di seluruh tubuhnya terdapat sejenis mekanisme yang dapat menghasilkan energi jika ia menerima gelombang suara berirama gembira."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			th: "ไวทัลแซมบา",
			id: "Vital Samba"
		},

		effect: {
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่ HP สูงสุดของโปเกมอนบนกระดานฝ่ายเราทุกตัว แต่ละตัวจะถูก [+40] แม้จะมีโปเกมอนที่มีความสามารถนี้กี่ตัวก็ตาม เอฟเฟกต์นี้ จะไม่เกิดผลซ้ำ",
			id: "Selama Pokémon ini ada di Arena, HP maksimal semua Pokémon di Arena sendiri masing-masing bertambah sejumlah 40. Efek ini tidak berlaku kelipatan meskipun ada Pokémon lain yang memiliki Ability yang sama."
		}
	}],

	attacks: [{
		name: {
			th: "ไฮโดรสแปลช",
			id: "Hydro Splash"
		},

		damage: 130,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card