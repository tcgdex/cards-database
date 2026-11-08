import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "เรดิบา",
		'id-id': "Ledyba"
	},

	illustrator: "Whisker",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'th-th': "เมื่ออากาศเย็นลง เรดิบาจำนวนมากจากที่ต่าง ๆ จะมารวมตัวกันเพื่อแอบอิงและมอบความอบอุ่นให้แก่กันและกัน",
		'id-id': "Jika udara menjadi dingin, Ledyba banyak berkumpul dari sana-sini, saling mendekat dan saling menghangatkan."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "กระโดดโหม่ง",
			'id-id': "Sundulan Meloncat"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card