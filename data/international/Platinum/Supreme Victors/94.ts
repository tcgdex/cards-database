import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Buneary",
		'fr-fr': "Laporeille",
		'de-de': "Haspiror"
	},

	illustrator: "Kanako Eo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [427],

	hp: 50,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Bounce",
				'fr-fr': "Faire des bonds",
				'de-de': "Sprungfeder"
			},
			effect: {
				'en-us': "Switch Buneary with 1 of your Benched Pokémon.",
				'fr-fr': "Échangez Laporeille avec 1 des Pokémon de votre Banc.",
				'de-de': "Tausche Haspiror gegen 1 Pokémon auf deiner Bank aus."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mini Drain",
				'fr-fr': "Mini-assèchement",
				'de-de': "Minisauger"
			},
			effect: {
				'en-us': "Remove 1 damage counter from Buneary.",
				'fr-fr': "Retirez à Laporeille 1 marqueur de dégât.",
				'de-de': "Entferne 1 Schadensmarke von Haspiror."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],
	retreat: 1,

	description: {
		'en-us': "Its ears are always rolled up. They can be forcefully extended to shatter even a large boulder."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84043,
				cardmarket: 278785
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278785,
				tcgplayer: 84043
			}
		},
	],

}

export default card
