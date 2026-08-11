import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Paldean Wooper",
		'fr-fr': "Axoloto de Paldea"
	},

	illustrator: "MAHOU",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [194],
	hp: 50,
	types: ["Darkness"],

	description: {
		'en-us': "After losing a territorial struggle, Wooper began\nliving on land. The Pokémon changed over time,\ndeveloping a poisonous film to protect its body.",
		'fr-fr': "Depuis qu'une dispute territoriale l'a contraint à vivre sur la terre ferme, il protège son corps en le recouvrant d'un fluide toxique."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Poison Jab",
			'fr-fr': "Direct Toxik"
		},

		damage: 10,
		cost: ["Darkness"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card