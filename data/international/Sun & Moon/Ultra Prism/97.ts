import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Gible",
		'fr-fr': "Griknot",
		'es-es': "Gible",
		'it-it': "Gible",
		'pt-br': "Gible",
		'de-de': "Kaumalat"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		443,
	],

	hp: 60,

	types: [
		"Dragon",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Rock Hiding",
				'fr-fr': "Cachette Roche",
				'es-es': "Escondido entre Rocas",
				'it-it': "Nascondiglio Roccioso",
				'pt-br': "Esconder nas Pedras",
				'de-de': "Steinversteck"
			},
			effect: {
				'en-us': "If this Pokémon has any Fighting Energy attached to it, it has no Retreat Cost.",
				'fr-fr': "Si de l’Énergie Fighting est attachée à ce Pokémon, il n’a pas de coût de Retraite.",
				'es-es': "Si este Pokémon tiene alguna Energía Fighting unida a él, no tiene ningún Coste de Retirada.",
				'it-it': "Se questo Pokémon ha delle Energie Fighting assegnate, non ha costo di ritirata.",
				'pt-br': "Se este Pokémon tiver alguma Energia Fighting ligada a ele, não terá custo de Recuo.",
				'de-de': "Wenn an dieses Pokémon mindestens 1 Fighting-Energie angelegt ist, hat es keine Rückzugskosten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gnaw",
				'fr-fr': "Ronge",
				'es-es': "Roer",
				'it-it': "Rosicchiamento",
				'pt-br': "Roída",
				'de-de': "Nagen"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It skulks in caves, and when prey or an enemy passes by, it leaps out and chomps them. The force of its attack sometimes chips its teeth.",
	},

	thirdParty: {
		cardmarket: 316022,
		tcgplayer: 157714
	}
}

export default card
