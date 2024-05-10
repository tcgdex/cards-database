import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "เอลฟูน",
		id: "Whimsicott"
	},

	illustrator: "KYUPIYAMA",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		th: "ทุกครั้งที่ได้อาบแสงอาทิตย์ปุยฝ้ายจะพองตัว ถ้าพองมากเกินไปมันจะฉีกเป็นชิ้นเล็ก ๆ และโปรยบริเวณรอบ ๆ",
		id: "Makin sering berjemur sinar matahari, makin mengembang pula kapas Whimsicott. Jika kapas mengembang terlalu banyak, Pokémon ini akan mencabut dan mencecerkan kapas tersebut ke sekelilingnya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "สายลมแห่งภูตพราย",
			id: "Angin Peri"
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