import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Weezing",
		'fr-fr': "Smogogo Niv. 47",
		'de-de': "Smogmog"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [110],

	hp: 80,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Koffing",
		'fr-fr': "Smogo"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Camouflage Gas",
				'fr-fr': "Gaz de camouflage",
				'de-de': "Tarngas"
			},
			effect: {
				'en-us': "If Weezing is Confused and is Knocked Out, your opponent can't take a Prize card.",
				'fr-fr': "Si Smogogo est Confus et qu'il est mis K.O, votre adversaire ne peut pas récolter de carte Récompense.",
				'de-de': "Wenn Smogmog verwirrt ist und kampfunfähig wird, kann dein Gegner keinen Preis nehmen."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Damage Breakdown",
				'fr-fr': "Casse-dégâts",
				'de-de': "Schadenverteilung"
			},
			effect: {
				'en-us': "Count the number of damage counters on Weezing. Put that many damage counters on the Defending Pokémon and Weezing is now Confused.",
				'fr-fr': "Comptabilisez le nombre de marqueurs de dégât sur Smogogo. Placez autant de marqueurs de dégât sur le Pokémon Défenseur et Smogogo est maintenant Confus.",
				'de-de': "Zähle die Anzahl der Schadensmarken auf Smogmog. Lege die gleiche Anzahl Schadensmarken auf das Verteidigende Pokémon und Smogmog ist jetzt verwirrt."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Smog",
				'fr-fr': "Purédpois",
				'de-de': "Smog"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Das Verteidigende Pokémon ist jetzt vergiftet."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],
	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278661,
				tcgplayer: 90563
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278661,
				tcgplayer: 90563
			}
		},
	],

}

export default card
