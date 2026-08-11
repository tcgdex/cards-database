import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "บูเบิร์น",
		'id-id': "Magmortar"
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		'th-th': "ระหว่างที่อาศัยอยู่ ณ ปากปล่องภูเขาไฟทำให้มีร่างกายเหมือนภูเขาไฟซึ่งมีอวัยวะคล้ายแหล่งกักเก็บแม็กมาขึ้นมา",
		'id-id': "Hidup di kepundan gunung berapi membuat tubuh Magmortar menjadi seperti gunung berapi yang memiliki organ menyerupai endapan magma."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "ไฟ",
			'id-id': "Api"
		},

		damage: 40,
		cost: ["Fire"]
	}, {
		name: {
			'th-th': "โวลเคนิกฮีท",
			'id-id': "Volcanic Heat"
		},

		effect: {
			'th-th': "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			'id-id': "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		},

		damage: 170,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card