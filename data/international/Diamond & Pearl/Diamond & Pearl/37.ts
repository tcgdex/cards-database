import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Snorlax",
		'fr-fr': "Ronflex",
		'de-de': "Relaxo"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		143,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Block",
				'fr-fr': "Barrage",
				'de-de': "Rückentzug"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
				'de-de': "Das Verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ease Up",
				'fr-fr': "Se détendre",
				'de-de': "Entspannungsangriff"
			},
			effect: {
				'en-us': "Snorlax is now Asleep. If Snorlax is evolved from Munchlax, this attack does 40 damage plus 30 more damage.",
				'fr-fr': "Ronflex est maintenant Endormi. Si Ronflex évolue en Goinfrex, cette attaque inflige 40 dégâts plus 30 dégâts supplémentaires.",
				'de-de': "Relaxo schläft jetzt. Wenn Relaxo sich aus Mampfaxo entwickelt hat, fügt dieser Angriff 40 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 4,

	description: {
		'en-us': "Its stomach can digest any kind of food, even if it happens to be moldy or rotten.",
		'fr-fr': "Son estomac peut digérer n'importe quel type de nourriture, même quand elle est moisie ou pourrie."
	},

	thirdParty: {
		cardmarket: 277536,
		tcgplayer: 89389
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		}
	]
}

export default card
