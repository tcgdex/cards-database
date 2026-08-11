import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pichu",
		'fr-fr': "Pichu"
	},

	illustrator: "Kariya",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [172],
	hp: 30,
	types: ["Lightning"],

	description: {
		'en-us': "It is unskilled at storing electric power.\nAny kind of shock causes it to discharge\nenergy spontaneously.",
		'fr-fr': "Il ne sait pas encore bien emmagasiner l'électricité. Au moindre choc, il envoie des décharges sans le vouloir."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Crackly Toss",
			'fr-fr': "Lancer qui Crépite"
		},

		effect: {
			'en-us': "Take a {L} Energy from your Energy Zone and attach it to 1 of your Benched Basic Pokémon.",
			'fr-fr': "Prenez une Énergie {L} de votre zone Énergie et attachez-la à un de vos Pokémon de base de Banc."
		}
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 0,
	boosters: ["lugia"]
}

export default card