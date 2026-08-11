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
	types: [
		"Colorless",
		"Psychic"
	],

	suffix: "Legend",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Space Virus",
				'fr-fr': "Virus spatial",
				'de-de': "Weltraumvirus"
			},
			effect: {
				'en-us': "If your opponent's Pokémon is Knocked Out by damage from an attack of Rayquaza & Deoxys LEGEND, take 1 more Prize card.",
				'fr-fr': "Si le Pokémon de votre adversaire est mis K.O. par une attaque de Rayquaza & Deoxys LÉGENDE, prenez une carte Récompense supplémentaire.",
				'de-de': "Wenn ein Pokémon deines Gegners durch Schaden eines Angriffs von Rayquaza & Deoxys-LEGENDE kampfunfähig gemacht wurde, nimm 1 zusätzlichen Preis."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Ozone Buster",
				'fr-fr': "Châtiment stellaire",
				'de-de': 'Ozonsprenger'
			},
			effect: {
				'en-us': "Discard all Fire Energy attached to Rayquaza & Deoxys LEGEND.",
				'fr-fr': "Défaussez toutes les cartes Énergie Fire attachées à Rayquaza & Deoxys LÉGENDE.",
				'de-de': 'Lege alle -Energien, die an Rayquaza & Deoxys-LEGENDE angelegt sind, auf deinen Ablagestapel.  '
			},
			damage: 150,

		}
	],

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
	stage: "Basic",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 279343,
				tcgplayer: 88637
			}
		},
		{
			type: "normal",
			stamp: ['david-cohen'],
			thirdParty: {
				cardmarket: 868143,
				tcgplayer: 480477
			}
		},
	],

	hp: 140,
}

export default card
