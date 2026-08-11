import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Xatu",
		'fr-fr': "Xatu",
		'de-de': "Xatu"
	},

	illustrator: "sui",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [178],

	hp: 90,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Natu",
		'fr-fr': "Natu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Psywave",
				'fr-fr': "Vague psy",
				'de-de': "Psywelle"
			},
			effect: {
				'en-us': "Does 20 damage times the amount of Energy attached to the Defending Pokémon.",
				'fr-fr': "Inflige 20 dégâts multipliés par le nombre de cartes Énergie attachées au Pokémon Défenseur.",
				'de-de': "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der an das Verteidigende Pokémon angelegten Energien zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Confuse Ray",
				'fr-fr': "Onde folie",
				'de-de': "Konfustrahl"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt verwirrt."
			},
			damage: 50,

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

	retreat: 1,

	description: {
		'en-us': "In South America, it is said that its right eye sees the future and its left eye views the past."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 90666,
				cardmarket: 279167
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 90666,
				cardmarket: 279167
			}
		},
		{
			type: "holo",
			foil: "cracked-ice",
		}
	],

}

export default card
