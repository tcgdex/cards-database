import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Crobat",
		'fr-fr': "Nostenfer",
		'de-de': "Iksbat"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [169],

	hp: 110,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Golbat",
		'fr-fr': "Nosferalto"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Supersonic",
				'fr-fr': "Ultrason",
				'de-de': "Superschall"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Das Verteidigende Pokémon ist jetzt verwirrt."
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hurricane Wing",
				'fr-fr': "Tornad’aile",
				'de-de': "Hurrikanschwinge"
			},
			effect: {
				'en-us': "Flip 4 coins. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez 4 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				'de-de': "Wirf 4 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "The development of wings on its legs enables it to fly fast but also makes it tough to stop and rest."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84488,
				cardmarket: 279170
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84488,
				cardmarket: 279170
			}
		},
		{
			type: "reverse",
			foil: "league",
			thirdParty: {
				cardmarket: 371561,
				tcgplayer: 153256
			}
		},
	],

}

export default card
