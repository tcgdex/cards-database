import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "โปรโตกา",
		id: "Tirtouga"
	},

	illustrator: "takashi shiraishi",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		th: "เคยอาศัยอยู่ใต้ทะเลดึกดำบรรพ์ แม้จะทำได้แค่คลานแต่ก็จะขึ้นไปบนบกเพื่อล่าเหยื่อ",
		id: "Tirtouga tinggal di laut purba. Meskipun hanya dapat merayap, Pokémon ini juga naik ke daratan demi mencari mangsa."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "สแปลชเทิร์น",
			id: "Splash Turn"
		},

		effect: {
			th: "สลับโปเกมอนนี้กับโปเกมอนบนเบนช์",
			id: "Tukar Pokémon ini dengan Pokémon Cadangan."
		},

		damage: 70,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card