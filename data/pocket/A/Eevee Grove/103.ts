import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Moltres ex",
		'fr-fr': "Sulfura-ex"
	},

	illustrator: "PLANETA Saito",
	rarity: "Two Shiny",
	category: "Pokemon",

	dexId: [146],
	hp: 140,
	types: ["Fire"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Inferno Dance",
			'fr-fr': "Danse Infernale"
		},

		cost: ["Fire"],

		effect: {
			'en-us': "Flip 3 coins. Take an amount of {R} Energy from your Energy Zone equal to the number of heads and attach it to your Benched {R} Pokémon in any way you like.",
			'fr-fr': "Lancez 3 pièces. Prenez le même nombre d'Énergie {R} de votre zone Énergie que le nombre de côté face obtenu et attachez-les à vos Pokémon  de Banc comme il vous plaît."
		}
	}, {
		name: {
			'en-us': "Heat Blast",
			'fr-fr': "Explosion de Chaleur"
		},

		damage: 70,
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card