import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Ho-Oh",
		'th-th': "โฮโอ"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		'id-id': "Pokémon yang terdapat pada mitos dengan kisah tubuhnya bersinar tujuh warna dan pelangi muncul setelah ia terbang.",
		'th-th': "โปเกมอนที่ถูกเล่าขานในเทพนิยายว่าร่างกายเปล่งประกาย 7 สี และจะมีสายรุ้งปรากฏหลังจากที่มันโบยบินผ่านไป"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Mengepak",
			'th-th': "ตีปีก"
		},

		damage: 50,
		cost: ["Fire", "Colorless"]
	}, {
		name: {
			'id-id': "Shine Blaze",
			'th-th': "ไชน์เบลซ"
		},

		effect: {
			'id-id': "Jika ada Pokémon Terastal di Cadangan sendiri, kerusakan yang diberikan bertambah sejumlah 100.",
			'th-th': "ถ้าบนเบนช์ฝ่ายเรามีโปเกมอน [เทรัสตัล] อยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 100"
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