import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Basculin",
		fr: "Bargantua",
		es: "Basculin",
		it: "Basculin",
		pt: "Basculin",
		de: "Barschuft"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Souichirou Gunjima",

	description: {
		en: "Known for their violence, these Pokémon have the most fights with schools of red-striped Basculin."
	},

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Swarm the Wound"
		},

		damage: "30+",

		effect: {
			en: "This attack does 10 more damage for each damage counter on your opponent's Active Pokémon."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card