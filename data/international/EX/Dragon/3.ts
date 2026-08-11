import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Crawdaunt",
		'fr-fr': "Colhomard",
		'de-de': "Krebutack"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [342],

	hp: 80,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Corphish",
		'fr-fr': "Écrapince"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Power Pinchers",
				'fr-fr': "Pinces puissantes",
				'de-de': "Kräftige Kneifzangen"
			},
			effect: {
				'en-us': "As long as Crawdaunt is your Active Pokémon, when any of your Active Pokémon does damage to the Defending Pokémon, the attack does 10 more damage (before applying Weakness and Resistance).",
				'fr-fr': "Tant que Colhomard est votre Pokémon Actif, dès qu'un de vos Pokémon Actifs inflige des dégâts aux Pokémon Défenseurs, cette attaque inflige 10 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				'de-de': "Wenn Krebutack dein Aktives Pokémon ist und eins deiner Aktiven Pokémon einem verteidigenden Pokémon Schaden zufügt, fügt der Angriff 10 weitere Schadenspunkte zu. (bevor Schwäche und Resistenz verrechnet wurden.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Guillotine",
				'fr-fr': "Guillotine",
				'de-de': "Guillotine"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 84461,
				cardmarket: 275880
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84461,
				cardmarket: 275880
			},
		},
	],

}

export default card
