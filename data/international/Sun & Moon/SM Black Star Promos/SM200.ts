import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Snubbull",
		'fr-fr': "Snubbull",
		'es-es': "Snubbull",
		'it-it': "Snubbull",
		'pt-br': "Snubbull",
		'de-de': "Snubbull"
	},

	illustrator: "Framestore",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		209,
	],

	hp: 60,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
				'es-es': "Mordisco",
				'it-it': "Morso",
				'pt-br': "Mordida",
				'de-de': "Biss"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Paralyzing Gaze",
				'fr-fr': "Regard Paralysant",
				'es-es': "Mirada Paralizante",
				'it-it': "Sguardo Paralizzante",
				'pt-br': "Olhar Paralisante",
				'de-de': "Lähmender Blick"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Paralysé.",
				'es-es': "Lanza una moneda. Si sale cara, el Pokémon Defensor pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon Difensore è Paralizzato.",
				'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Defensor será Paralisado.",
				'de-de': "Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt paralysiert."
			},

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It grows close to others easily and is also easily spoiled. The disparity between its face and its actions makes many young people wild about it.",
	},
}

export default card
