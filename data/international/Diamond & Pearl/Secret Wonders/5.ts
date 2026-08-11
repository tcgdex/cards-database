import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Flygon",
		'fr-fr': "Libegon",
		'de-de': "Libelldra"
	},

	illustrator: "Daisuke Ito",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		330,
	],

	hp: 120,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Vibrava",
		'fr-fr': "Vibraninf",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Irritating Buzz",
				'fr-fr': "Bourdonnement irritant",
				'de-de': "Lästiges Gebrumm"
			},
			effect: {
				'en-us': "As long as Flygon is your Active Pokémon, put 1 damage counter on each of your opponent's Active Pokémon between turns, excluding Fighting Pokémon.",
				'fr-fr': "Tant que Libegon est votre Pokémon Actif, placez 1 marqueur de dégât sur chacun des Pokémon Actifs de votre adversaire entre deux tours, Pokémon Fighting exclus.",
				'de-de': "Solange Libelldra dein Aktives Pokémon ist, lege zwischen Zügen 1 Schadensmarke auf jedes Aktive Pokémon deines Gegners (außer -Pokémon)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sand Sonic",
				'fr-fr': "Sable sonique",
				'de-de': "Schmirgelschall"
			},
			effect: {
				'en-us': "If you attach a Fighting Energy card from your hand to Flygon during this turn, this attack does 60 damage plus 20 more damage.",
				'fr-fr': "Si vous attachez une carte Énergie Fighting de votre main à Libegon lors de ce tour, cette attaque inflige 60 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Wenn du in diesem Zug eine -Energiekarte von deiner Hand an Libelldra angelegt hast, fügt dieser Angriff 60 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It whips up sandstorms with powerful flaps of its wings. It is known as \"The Desert Spirit.\"",
	},

	thirdParty: {
		cardmarket: 277758,
		tcgplayer: 85525
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		}
	]
}

export default card
