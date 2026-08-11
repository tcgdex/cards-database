import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Zeraora",
		'fr-fr': "Zeraora"
	},

	illustrator: "kawayoo",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [807],
	hp: 90,
	types: ["Lightning"],

	description: {
		'en-us': "It electrifies its claws and tears its opponents\napart with them. Even if they dodge its attack,\nthey'll be electrocuted by the flying sparks.",
		'fr-fr': "Il déchiquette son adversaire avec ses griffes chargées d'électricité. Même si sa cible évite l'attaque, elle reçoit un coup de jus."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Thunderclap Flash",
			'fr-fr': "Flash Fulgurant"
		},

		effect: {
			'en-us': "At the end of your first turn, take a {L} Energy from your Energy Zone and attach it to this Pokémon.",
			'fr-fr': "À la fin de votre premier tour, prenez une Énergie {L} de votre zone Énergie et attachez-la à ce Pokémon."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Lightning Claw",
			'fr-fr': "Griffe Éclair"
		},

		damage: 50,
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card
