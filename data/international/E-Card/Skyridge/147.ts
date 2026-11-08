import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Crobat",
		'de-de': "Iksbat"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [169],

	hp: 80,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Golbat",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Crystal Type",
				'de-de': "Kristall-Typ"
			},
			effect: {
				'en-us': "Whenever you attach a Grass, Fire, or Psychic basic Energy card from your hand to Crobat, Crobat's type (color) becomes the same as that type of Energy until the end of the turn.",
				'de-de': "Immer wenn du eine -, - oder -Basis-Energiekarte aus deiner Hand an Iksbat anlegst, ändert sich Iksbats Typ (Farbe) bis zum Ende des Zuges zu dem gleichen Typ wie diese Energie."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Fire",
				"Colorless",
			],

			name: {
				'en-us': "Poison Flame",
				'de-de': "Giftflamme"
			},

			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Burned and Poisoned.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" ist das verteidigende Pokémon jetzt verbrannt und vergiftet."
			},

			damage: 20,
		},
		{
			cost: [
				"Grass",
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Squared Attack",
				'de-de': "Vierseiten-Angriff"
			},
			effect: {
				'en-us': "Flip 4 coins. This attack does 20 damage times the number of heads.",
				'de-de': "Wirf 4 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	variants: [
		{
			type: 'holo',
			thirdParty: {
				tcgplayer: 84485,
				cardmarket: 275264
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 84485,
				cardmarket: 275264
			},
		},
		{
			type: 'holo',
			foil: 'cracked-ice',
			size: 'jumbo',
			thirdParty: {
				tcgplayer: 210852
			}
		}
	],
	retreat: 0,
}

export default card
