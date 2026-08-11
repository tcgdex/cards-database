import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "โซโด",
		'id-id': "Cufant"
	},

	illustrator: "Shinya Mizuno",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	description: {
		'th-th': "สามารถยกของที่หนัก 5 ตันได้ ในตอนเช้าจะมุ่งหน้าไปยังถ้ำเป็นฝูงเพื่อหาหินแร่ที่เป็นอาหาร",
		'id-id': "Cufant dapat mengangkat barang seberat 5 ton. Saat pagi tiba, Pokémon ini pergi ke gua bersama sesamanya untuk mencari bijih makanannya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "พุ่งเข้าชน",
			'id-id': "Serudukan"
		},

		damage: 30,
		cost: ["Metal", "Colorless"]
	}, {
		name: {
			'th-th': "ตั้งใจสู้",
			'id-id': "Menentang"
		},

		damage: 70,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card