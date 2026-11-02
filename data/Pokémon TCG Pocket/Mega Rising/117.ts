import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Swirlix",
		fr: "Sucroquin"
	},

	illustrator: "Kurata So",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [684],
	hp: 60,
	types: ["Psychic"],

	description: {
		en: "The sweet smell of cotton candy perfumes\nSwirlix's fluffy fur. This Pokémon spits out\nsticky string to tangle up its enemies."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Cotton Guard",
			fr: "Cotogarde"
		},

		damage: 10,
		cost: ["Psychic"],

		effect: {
			en: "During your opponent's next turn, this Pokémon takes −20 damage from attacks.",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit − 20 dégâts provenant des attaques."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria"]
}

export default card