import { Card } from 'models/database/card'
import Set from '../Kalos Starter Set'

const card: Card = {
	name: {
		'en-us': "Quilladin",
		'fr-fr': "Boguérisse",
		'es-es': "Quilladin",
		'it-it': "Quilladin",
		'pt-br': "Quilladin",
		'de-de': "Igastarnish"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		651,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Chespin",
		'fr-fr': "Marisson",
		'es-es': "Chespin",
		'it-it': "Chespin",
		'pt-br': "Chespin",
		'de-de': "Igamaro"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Leech Seed",
				'fr-fr': "Vampigraine",
				'es-es': "Drenadoras",
				'it-it': "Parassiseme",
				'pt-br': "Semente Sanguessuga",
				'de-de': "Egelsamen"
			},
			effect: {
				'en-us': "Heal 10 damage from this Pokémon.",
				'fr-fr': "Soignez 10 dégâts à ce Pokémon.",
				'es-es': "Cura 10 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 10 danni.",
				'pt-br': "Cura 10 de danos deste Pokémon.",
				'de-de': "Heile 10 Schadenspunkte bei diesem Pokémon."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Needle Arm",
				'fr-fr': "Poing Dard",
				'es-es': "Brazo Pincho",
				'it-it': "Pugnospine",
				'pt-br': "Braço de Agulha",
				'de-de': "Nietenranke"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It relies on its sturdy shell to deflect predators' attacks. It counterattacks with its sharp quills.",
	},

	thirdParty: {
		cardmarket: 281270,
		tcgplayer: 88490
	}
}

export default card
