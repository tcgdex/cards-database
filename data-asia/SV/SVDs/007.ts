import { Card } from "../../../interfaces"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		th: "โมคุโร",
		id: "Rowlet"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		th: "จะสงบเมื่ออยู่ในที่มืดแคบ บางครั้งก็ใช้ซอกแขนหรือกระเป๋าของโปเกมอนเทรนเนอร์แทนรัง",
		id: "Rowlet merasa tenang di tempat yang gelap dan sempit. Kadang Pokémon ini menjadikan kantong atau tas pelatihnya sebagai pengganti sarang."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ขนปีกแหลมคม",
			id: "Bulu Tajam"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card