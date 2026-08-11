import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Ariados",
		'fr-fr': "Migalos"
	},

	illustrator: "Shinji Kanda",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [168],
	hp: 80,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Spinarak"
	},

	description: {
		'en-us': "Every night, it wanders around in search of\nprey, whose movements it restrains by spewing\nthreads before it bites into them with its fangs.",
		'fr-fr': "Il erre chaque nuit à la recherche d'une proie. Quand il en trouve une, il l'immobilise grâce à ses fils, puis la croque avec ses mandibules."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Bind Down",
			'fr-fr': "Astreinte"
		},

		damage: 40,
		cost: ["Darkness"],

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card