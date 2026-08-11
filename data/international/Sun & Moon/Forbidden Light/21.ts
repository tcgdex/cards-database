import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Froakie",
		'fr-fr': "Grenousse",
		'es-es': "Froakie",
		'it-it': "Froakie",
		'pt-br': "Froakie",
		'de-de': "Froxy"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		656,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Frubbles",
				'fr-fr': "Grebulles",
				'es-es': "Frurbujas",
				'it-it': "Frobolle",
				'pt-br': "Frobolhas",
				'de-de': "Flubba"
			},
			effect: {
				'en-us': "If this Pokémon has any Water Energy attached to it, it has no Retreat Cost.",
				'fr-fr': "Si de l’Énergie Water est attachée à ce Pokémon, il n’a pas de coût de Retraite.",
				'es-es': "Si este Pokémon tiene alguna Energía Water unida a él, no tiene ningún Coste de Retirada.",
				'it-it': "Se questo Pokémon ha delle Energie Water assegnate, non ha costo di ritirata.",
				'pt-br': "Se este Pokémon tiver alguma Energia Water ligada a ele, não terá custo de Recuo.",
				'de-de': "Wenn an dieses Pokémon mindestens 1 Water-Energie angelegt ist, hat es keine Rückzugskosten."
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
				'en-us': "Flop",
				'fr-fr': "Flop",
				'es-es': "Vuelta",
				'it-it': "Tonfo",
				'pt-br': "Baque",
				'de-de': "Plumps"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It protects its skin by covering its body in delicate bubbles. Beneath its happy-go-lucky air, it keeps a watchful eye on its surroundings.",
	},

	thirdParty: {
		cardmarket: 355541,
		tcgplayer: 165670
	}
}

export default card
