import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Jynx",
		'fr-fr': "Lippoutou"
	},

	illustrator: "MAHOU",
	category: "Pokemon",

	dexId: [124],
	hp: 80,
	types: ["Psychic"],

	description: {
		'en-us': "Its strange cries sound like human language.\nThere are some musicians who compose songs\nfor Jynx to sing.",
		'fr-fr': "Ses étranges cris s'apparentent à des mots. Certains musiciens lui composent des chansons pour qu'il les interprète."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Psychic",
			'fr-fr': "Psyko"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"],

		effect: {
			'en-us': "This attack does 20 more damage for each Energy attached to your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts de plus pour chaque Énergie attachée au Pokémon Actif de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Shiny"
}

export default card