import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Glaceon ex",
		'fr-fr': "Givrali-ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Shiny",
	category: "Pokemon",

	dexId: [471],
	hp: 140,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Eevee"
	},

	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Snowy Terrain",
			'fr-fr': "Terrain Enneigé"
		},

		effect: {
			'en-us': "During Pokémon Checkup, if this Pokémon is in the Active Spot, do 10 damage to your opponent's Active Pokémon.",
			'fr-fr': "Pendant le Contrôle Pokémon, si ce Pokémon est sur le Poste Actif, infligez 10 dégâts au Pokémon Actif de votre adversaire."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Freezing Wind",
			'fr-fr': "Vent Glaçant"
		},

		damage: 90,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card