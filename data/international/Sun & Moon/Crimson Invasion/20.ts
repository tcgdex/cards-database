import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Piloswine",
		'fr-fr': "Cochignon",
		'es-es': "Piloswine",
		'it-it': "Piloswine",
		'pt-br': "Piloswine",
		'de-de': "Keifel"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		221,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Swinub",
		'fr-fr': "Marcacrin",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Stampede",
				'fr-fr': "Ruée",
				'es-es': "Estampida",
				'it-it': "Fuggi Fuggi",
				'pt-br': "Estouro",
				'de-de': "Zertrampeln"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rest",
				'fr-fr': "Repos",
				'es-es': "Descanso",
				'it-it': "Riposo",
				'pt-br': "Descansar",
				'de-de': "Erholung"
			},
			effect: {
				'en-us': "This Pokémon is now Asleep. Heal 90 damage from it.",
				'fr-fr': "Ce Pokémon est maintenant Endormi. Soignez 90 dégâts à ce Pokémon.",
				'es-es': "Este Pokémon pasa a estar Dormido. Cúrale 90 puntos de daño.",
				'it-it': "Questo Pokémon viene addormentato. Curalo da 90 danni.",
				'pt-br': "Este Pokémon agora está Adormecido. Cure 90 pontos de dano dele.",
				'de-de': "Dieses Pokémon schläft jetzt. Heile 90 Schadenspunkte bei ihm."
			},

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "Although its legs are short, its rugged hooves prevent it from slipping, even on icy ground.",
	},

	thirdParty: {
		cardmarket: 311870,
		tcgplayer: 149041
	}
}

export default card
