import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "เอลฟูน",
		'id-id': "Whimsicott"
	},

	illustrator: "KYUPIYAMA",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'th-th': "ทุกครั้งที่ได้อาบแสงอาทิตย์ปุยฝ้ายจะพองตัว ถ้าพองมากเกินไปมันจะฉีกเป็นชิ้นเล็ก ๆ และโปรยบริเวณรอบ ๆ",
		'id-id': "Makin sering berjemur sinar matahari, makin mengembang pula kapas Whimsicott. Jika kapas mengembang terlalu banyak, Pokémon ini akan mencabut dan mencecerkan kapas tersebut ke sekelilingnya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "สายลมแห่งภูตพราย",
			'id-id': "Angin Peri"
		},

		damage: 50,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card