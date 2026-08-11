import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Gallade ex",
		'fr-fr': "Gallame-ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Shiny",
	category: "Pokemon",

	dexId: [475],
	hp: 170,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Kirlia"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Energized Blade",
			'fr-fr': "Lame Énergisée"
		},

		damage: 70,
		cost: ["Fighting", "Fighting"],

		effect: {
			'en-us': "This attack does 20 more damage for each Energy attached to your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts de plus pour chaque Énergie attachée au Pokémon Actif de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1
}

export default card