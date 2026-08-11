import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Espeon ex",
		'fr-fr': "Mentali-ex"
	},

	illustrator: "Taira Akitsu",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [196],
	hp: 140,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Eevee"
	},

	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Psychic Healing",
			'fr-fr': "Soin Psy"
		},

		effect: {
			'en-us': "Once during your turn, if this Pokémon is in the Active Spot, you may heal 30 damage from 1 of your Pokémon.",
			'fr-fr': "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez soigner 30 dégâts d'un de vos Pokémon."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Super Psy Bolt",
			'fr-fr': "Super Psy"
		},

		damage: 80,
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card