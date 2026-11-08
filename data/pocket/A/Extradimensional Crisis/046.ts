import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Alolan Diglett",
		'fr-fr': "Taupiqueur d'Alola"
	},

	illustrator: "Megumi Mizutani",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [50],
	hp: 60,
	types: ["Metal"],

	description: {
		'en-us': "The metal-rich geology of this Pokémon's habitat\ncaused it to develop steel whiskers on its head.",
		'fr-fr': "À force d'être en contact avec des terres riches en métaux, des vibrisses en acier ont poussé sur le sommet de sa tête."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Happened to Headbutt",
			'fr-fr': "Coup d'Boule Surprise"
		},

		damage: 40,
		cost: ["Metal"],

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card