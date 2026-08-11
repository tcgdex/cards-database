import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Umbreon",
		'fr-fr': "Noctali",
		'de-de': "Nachtara"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		197,
	],

	hp: 80,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Evoli",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Moonlight Veil",
				'fr-fr': "Voile lunaire",
				'de-de': "Mondschleier"
			},
			effect: {
				'en-us': "Each of your Pokémon that evolves from Eevee has no Weakness, and that Pokémon's Retreat Cost is 0.",
				'fr-fr': "Chacun de vos Pokémon évoluant d'Evoli ne possède pas de Faiblesse et a un Coût de retraite de 0.",
				'de-de': "Jedes deiner Pokémon, das sich aus Evoli entwickelt hat, hat keine Schwäche mehr, und Rückzugskosten 0."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Confuse Ray",
				'fr-fr': "Onde folie",
				'de-de': "Konfusstrahl"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Das Verteidigende Pokémon ist jetzt verwirrt."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The light of the moon changed Eevee's genetic structure. It lurks in darkness for prey.",
	},

	thirdParty: {
		cardmarket: 278081,
		tcgplayer: 90144
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
