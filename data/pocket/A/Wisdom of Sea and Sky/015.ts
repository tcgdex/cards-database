import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Jumpluff",
		'fr-fr': "Cotovol"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [189],
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Skiploom"
	},

	description: {
		'en-us': "Jumpluff travels on seasonal winds. Once its\ncotton spores run out, its journey ends, as does\nits life.",
		'fr-fr': "Il voyage au gré des vents saisonniers. Quand il arrive à court de spores de coton, cela marque la fin de son périple, mais aussi de sa vie."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Fluffy Flight",
			'fr-fr': "Envolée Molletonnée"
		},

		effect: {
			'en-us': "Your Active Pokémon has no Retreat Cost.",
			'fr-fr': "Votre Pokémon Actif n'a aucun Coût de Retraite."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Spinning Attack",
			'fr-fr': "Attaque Tournante"
		},

		damage: 60,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card