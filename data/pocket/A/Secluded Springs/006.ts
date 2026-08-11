import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Celebi",
		'fr-fr': "Celebi"
	},

	illustrator: "Yuu Nishida",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [251],
	hp: 70,
	types: ["Grass"],

	description: {
		'en-us': "This Pokémon wanders across time. Grass and trees\nflourish in the forests in which it has appeared.",
		'fr-fr': "Ce Pokémon voyage dans le temps. Les forêts où il apparaît deviennent prodigieusement luxuriantes."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Temporal Leaves",
			'fr-fr': "Feuilles Temporelles"
		},

		damage: 40,
		cost: ["Grass", "Grass"],

		effect: {
			'en-us': "If your opponent's Active Pokémon is an evolved Pokémon, devolve it by putting the highest Stage Evolution card on it into your opponent's hand.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon évolué, faites-le dés-évoluer en plaçant la carte Évolution la plus élevée placée dessus dans la main de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card