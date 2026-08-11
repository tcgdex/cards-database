import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "มาโฮมิล",
		id: "Milcery"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		th: "หากถูกจู่โจม มันจะพุ่งเข้าชนทำให้ศัตรูเปรอะไปด้วยครีม ในช่วงที่ศัตรูมองไม่เห็นหรือตกใจกับความอร่อยของครีม ก็จะอาศัยจังหวะนั้นหนีไป",
		id: "Ia menyeruduk jika diserang musuh. Pokémon ini kabur ketika musuhnya dibuat berlumuran krim agar tidak bisa melihat atau terkejut karena kelezatan krimnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "งึมงำ",
			id: "Bergumam"
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