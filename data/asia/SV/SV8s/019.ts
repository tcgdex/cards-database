import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Ho-Oh",
		th: "โฮโอ"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		id: "Pokémon yang terdapat pada mitos dengan kisah tubuhnya bersinar tujuh warna dan pelangi muncul setelah ia terbang.",
		th: "โปเกมอนที่ถูกเล่าขานในเทพนิยายว่าร่างกายเปล่งประกาย 7 สี และจะมีสายรุ้งปรากฏหลังจากที่มันโบยบินผ่านไป"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Mengepak",
			th: "ตีปีก"
		},

		damage: 50,
		cost: ["Fire", "Colorless"]
	}, {
		name: {
			id: "Shine Blaze",
			th: "ไชน์เบลซ"
		},

		effect: {
			id: "Jika ada Pokémon Terastal di Cadangan sendiri, kerusakan yang diberikan bertambah sejumlah 100.",
			th: "ถ้าบนเบนช์ฝ่ายเรามีโปเกมอน [เทรัสตัล] อยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 100"
		},

		damage: "100+",
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card