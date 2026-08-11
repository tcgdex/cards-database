import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "คลามิงโก้",
		'id-id': "Flamigo"
	},

	illustrator: "kantaro",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		'th-th': "เนื่องจากมีพฤติกรรมที่เรียกว่าซิงโคร ทุกตัวในฝูงจะโจมตีพร้อมกันอย่างเป็นระเบียบ",
		'id-id': "Dengan kebiasaan Flamigo yang disebut Sinkronisasi, kelompok Pokémon ini menyerang lawan secara bersamaan dengan sinkron."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "ตีปีก",
			'id-id': "Mengepak"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "โฉบ",
			'id-id': "Menukik Drastis"
		},

		effect: {
			'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 20 ด้วย",
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 20."
		},

		damage: 110,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card