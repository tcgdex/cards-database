import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Snubbull",
		'fr-fr': "Snubbull",
		'es-es': "Snubbull",
		'it-it': "Snubbull",
		'pt-br': "Snubbull",
		'de-de': "Snubbull"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		209,
	],

	hp: 70,

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
				'en-us': "Reckless Charge",
				'fr-fr': "Attaque Imprudente",
				'es-es': "Carga Descuidada",
				'it-it': "Carica Avventata",
				'pt-br': "Carga Indomável",
				'de-de': "Waghalsiger Sturmangriff"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this Pokémon does 10 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c’est pile, ce Pokémon s’inflige 10 dégâts.",
				'es-es': "Lanza 1 moneda. Si sale cruz, este Pokémon se hace 10 puntos de daño a sí mismo.",
				'it-it': "Lancia una moneta. Se esce croce, questo Pokémon infligge 10 danni a se stesso.",
				'pt-br': "Jogue 1 moeda. Se sair coroa, este Pokémon causará 10 pontos de dano a si mesmo.",
				'de-de': "Wirf 1 Münze. Bei Zahl fügt sich dieses Pokémon selbst 10 Schadenspunkte zu."
			},
			damage: 20,

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
		'en-us': "Its growls make its opponents uneasy. This laid-back Pokémon tends to sleep half the day.",
	},

	thirdParty: {
		cardmarket: 295401,
		tcgplayer: 126962
	}
}

export default card
