import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Archeops",
		fr: "Aéroptéryx"
	},

	illustrator: "OKUBO",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [567],
	hp: 140,
	types: ["Fighting"],

	evolveFrom: {
		en: "Archen",
		fr: "Arkéapti"
	},

	description: {
		en: "Though capable of flight, Archeops was\napparently better at hunting on the ground."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Wild Spin",
			fr: "Tour Acharné"
		},

		cost: ["Fighting"],

		effect: {
			en: "This attack does 20 damage to each of your opponent's Pokémon. During your next turn, this Pokémon's Wild Spin attack does +20 damage to each of your opponent's Pokémon.",
			fr: "Cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire. Pendant votre prochain tour, l'attaque Tour Acharné de ce Pokémon inflige + 20 dégâts à chacun des Pokémon de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["mega-blaziken"]
}

export default card