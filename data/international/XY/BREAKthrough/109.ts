import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Axew",
		'fr-fr': "Coupenotte",
		'es-es': "Axew",
		'it-it': "Axew",
		'pt-br': "Axew",
		'de-de': "Milza"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		610,
	],

	hp: 60,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Extra Chop",
				'fr-fr': "Tranch'Extra",
				'es-es': "Tajo Extra",
				'it-it': "Porzione Extra",
				'pt-br': "Golpe Adicional",
				'de-de': "Nachschlag"
			},
			effect: {
				'en-us': "This Pokémon does 10 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige 10 dégâts.",
				'es-es': "Este Pokémon se hace 10 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge 10 danni a se stesso.",
				'pt-br': "Este Pokémon causa 10 de danos a si mesmo.",
				'de-de': "Dieses Pokémon fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Claw",
				'fr-fr': "Dracogriffe",
				'es-es': "Garra Dragón",
				'it-it': "Dragartigli",
				'pt-br': "Garra de Dragão",
				'de-de': "Drachenklaue"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "They mark their territory by leaving gashes in trees with their tusks. If a tusk breaks, a new one grows in quickly.",
	},

	thirdParty: {
		cardmarket: 286354,
		tcgplayer: 107228
	}
}

export default card
