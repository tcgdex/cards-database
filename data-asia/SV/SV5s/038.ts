import { Card } from "../../../interfaces"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		id: "Carvanha"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		id: "Meskipun menemukan mangsa, Carvanha tidak akan menyerang saat sedang sendirian. Pokémon ini menunggu kedatangan temannya dan menyerang secara berkelompok."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Splash"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card