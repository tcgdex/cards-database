import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Cloyster",
		'fr-fr': "Crustabri",
		'de-de': "Austos"
	},

	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		91,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Shellder",
		'fr-fr': "Kokiyas"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Exoskeleton",
				'fr-fr': "Exosquelette",
				'de-de': "Exoskelett"
			},
			effect: {
				'en-us': "Any damage done to Cloyster by attacks is reduced by 20 (after applying Weakness and Resistance).",
				'fr-fr': "Les dégâts infligés à Crustabri par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				'de-de': "Jeder Schaden, der Austos durch Angriffe zugefügt wird, wird um 20 reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double Bubble",
				'fr-fr': "Double bulle",
				'de-de': "Doppel Seifenblase"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 10 damage times the number of heads. If either of the coins is heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces. Si l'un des deux lancers est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu. Wenn mindestens einer der Münzen \"Kopf\" zeigt, ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: "10x",

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Shell Attack",
				'fr-fr': "Carap'attaque",
				'de-de': "Muschelangriff"
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


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276196,
				tcgplayer: 84373
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276196,
				tcgplayer: 84373
			},
		}
	]
}

export default card
