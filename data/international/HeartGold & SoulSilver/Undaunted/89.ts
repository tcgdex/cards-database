import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Rayquaza & Deoxys LEGEND",
		'fr-fr': "Rayquaza & Deoxys LÉGENDE",
		'de-de': "Rayquaza & Deoxys LEGENDE"
	},

	illustrator: "Shinji Higuchi + Sachiko Eba",
	rarity: "LEGEND",
	category: "Pokemon",
	set: Set,

	dexId: [384, 386],
	hp: 140,

	types: [
		"Colorless",
		"Psychic"
	],

	suffix: "Legend",

	attacks: [
		{
			name: {
				'en-us': "Ozone Buster",
				'fr-fr': "",
				'de-de': "Ozonsprenger"
			},

			effect: {
				'en-us': "Discard all Fire Energy attached to Rayquaza & Deoxys LEGEND.",
				'fr-fr': "Placez cette carte sur votre Banc uniquement avec l’autre moitié de Rayquaza & Deoxys LÉGENDE.",
				'de-de': "Lege alle -Energien, die an Rayquaza & Deoxys-LEGENDE angelegt sind, auf deinen Ablagestapel."
			},

			damage: 150,
			cost: ["Fire", "Fire", "Lightning", "Colorless"]
		},
	],

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Space Virus"
			},
			effect: {
				'en-us': "If your opponent's Pokémon is Knocked Out by damage from an attack of Rayquaza & Deoxys LEGEND, take 1 more Prize card."
			}
		},
	],
	stage: "Basic",
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 3,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 279342,
				tcgplayer: 88638
			}
		},
		{
			type: "normal",
			stamp: ['david-cohen'],
			thirdParty: {
				cardmarket: 868142,
				tcgplayer: 480476
			}
		},
	],
}

export default card
