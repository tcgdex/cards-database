import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "อาโอการาสึ <ของฮ็อป>",
		id: "Corvisquire <Hop>"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		th: "หัวดี ถ้าเป็นอุปกรณ์ที่สามารถใช้งานด้วยเท้าหรือจะงอยปากได้ แป๊บเดียวก็จำวิธีใช้ได้",
		id: "Corvisquire sangat cerdas. Pokémon ini dengan mudahnya mengingat cara pemakaian alat yang dapat digunakan dengan paruh dan kakinya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "บินเร็วจี๋",
			id: "Terbang Cepat"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			th: "ขนปีกแหลมคม",
			id: "Bulu Tajam"
		},

		damage: 80,
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
	regulationMark: "I"
}

export default card