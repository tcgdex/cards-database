import { Card } from 'models/database/card'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Piplup",
		'fr-fr': "Tiplouf",
		'de-de': "Plinfa"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		393,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Because it is very proud, it hates accepting food from people. Its thick down guards it from cold.",
		'fr-fr': "Il est fier et déteste accepter la nourriture qu'on lui offre. Son pelage épais le protège du froid."
	},

	attacks: [{
		name: {
			'fr-fr': "Picpic",
			'de-de': "Schnabel"
		},

		damage: 10
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'fr-fr': "Éclaboussure",
			'de-de': "Wasserplatscher"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires.",
			'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 20 Schadenspunkte plus 10 weitere Schadenspunkte zu."
		},

		damage: "20+"
	}],

	variants: [
		{
			type: "holo",
			foil: "cosmos"
		},
		{
			type: "holo",
			stamp: ["dylan-lefavour"]
		}
	],
}

export default card
