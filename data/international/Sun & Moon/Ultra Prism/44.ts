import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Electivire",
		'fr-fr': "Élekable",
		'es-es': "Electivire",
		'it-it': "Electivire",
		'pt-br': "Electivire",
		'de-de': "Elevoltek"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		466,
	],

	hp: 140,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Electabuzz",
		'fr-fr': "Élektek",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Steel Short",
				'fr-fr': "Court Acier",
				'es-es': "Cortocircuito Acero",
				'it-it': "Corto Metallico",
				'pt-br': "Curto-circuito Metálico",
				'de-de': "Stahlschock"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon is a Metal Pokémon, it is now Paralyzed.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon Metal, il est maintenant Paralysé.",
				'es-es': "Si el Pokémon Activo de tu rival es un Pokémon Metal, este pasa a estar Paralizado.",
				'it-it': "Se il Pokémon attivo del tuo avversario è di tipo Metal, viene paralizzato.",
				'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon Metal, ele será Paralisado.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners ein Metal-Pokémon ist, ist es jetzt paralysiert."
			},
			damage: 60,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Volt Knuckle",
				'fr-fr': "Poing Volt",
				'es-es': "Nudillo Voltio",
				'it-it': "Pugno Volt",
				'pt-br': "Punho de Volts",
				'de-de': "Voltfaust"
			},

			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 4,

	description: {
		'en-us': "When it gets excited, it thumps its chest. With every thud, thunder roars and electric sparks shower all around.",
	},

	thirdParty: {
		cardmarket: 315974,
		tcgplayer: 157661
	}
}

export default card
