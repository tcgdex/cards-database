import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "มาโฮมิล"
	},

	illustrator: "Dsuke",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		th: "หากถูกจู่โจม มันจะพุ่งเข้าชนทำให้ศัตรูเปรอะไปด้วยครีม ในช่วงที่ศัตรูมองไม่เห็นหรือตกใจกับความอร่อยของครีม ก็จะอาศัยจังหวะนั้นหนีไป"
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "งึมงำ"
		},

		damage: 20,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card