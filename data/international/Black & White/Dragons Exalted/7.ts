import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Silcoon",
		'fr-fr': "Armulys",
		'es-es': "Silcoon",
		'it-it': "Silcoon",
		'pt-br': "Silcoon",
		'de-de': "Schaloko"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		266,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Wurmple",
		'fr-fr': "Chenipotte",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Harden",
				'fr-fr': "Armure",
			},
			effect: {
				'en-us': "During your opponent's next turn, if this Pokémon would be damaged by an attack, prevent that attack's damage done to this Pokémon if that damage is 60 or less.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, si ce Pokémon doit subir les dégâts d'une attaque, évitez les dégâts infligés à ce Pokémon si ces dégâts sont de 60 ou moins.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bug Bite",
				'fr-fr': "Piqûre",
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It wraps silk around the branches of a tree. It drinks rainwater on its silk while awaiting evolution.",
	},

	thirdParty: {
		cardmarket: 280446,
		tcgplayer: 89214
	}
}

export default card
