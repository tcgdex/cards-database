import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Cryogonal",
		'fr-fr': "Hexagel"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [615],
	hp: 80,
	types: ["Water"],

	description: {
		'en-us': "Cryogonal appear during cold seasons. It is said\nthat people and Pokémon who die on snowy\nmountains are reborn into these Pokémon.",
		'fr-fr': "Il apparaît lors des saisons froides. On dit qu'il est la réincarnation des personnes et des Pokémon disparus dans la neige des montagnes."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Ice Blade",
			'fr-fr': "Lame de Glace"
		},

		cost: ["Water", "Water"],

		effect: {
			'en-us': "This attack does 40 damage to 1 of your opponent's Pokémon.",
			'fr-fr': "Cette attaque inflige 40 dégâts à l'un des Pokémon de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card