import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Talonflame",
		'fr-fr': "Flambusard"
	},

	illustrator: "5ban Graphics",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [663],
	hp: 130,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Fletchinder"
	},

	description: {
		'en-us': "It has top-notch flying capabilities. It flies\naround easily, even while carrying prey\nthat weighs more than 220 lbs.",
		'fr-fr': "Ce Pokémon excelle dans l'art de voler. Il est même capable de transporter une proie de plus de 100 kg sans sourciller."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Searing Flame",
			'fr-fr': "Flammes Calcinantes"
		},

		damage: 50,
		cost: ["Fire"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card