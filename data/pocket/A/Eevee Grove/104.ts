import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Articuno ex",
		'fr-fr': "Artikodin-ex"
	},

	illustrator: "PLANETA Saito",
	rarity: "Two Shiny",
	category: "Pokemon",

	dexId: [144],
	hp: 140,
	types: ["Water"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Ice Wing",
			'fr-fr': "Aile Glace"
		},

		damage: 40,
		cost: ["Water", "Colorless"]
	}, {
		name: {
			'en-us': "Blizzard",
			'fr-fr': "Blizzard"
		},

		damage: 80,
		cost: ["Water", "Water", "Water"],

		effect: {
			'en-us': "This attack also does 10 damage to each of your opponent's Benched Pokémon.",
			'fr-fr': "Cette attaque inflige aussi 10 dégâts à chaque Pokémon de Banc de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card