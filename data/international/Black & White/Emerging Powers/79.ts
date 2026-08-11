import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Watchog",
		'fr-fr': "Miradar",
		'es-es': "Watchog",
		'it-it': "Watchog",
		'pt-br': "Watchog",
		'de-de': "Kukmarda"
	},

	illustrator: "MAHOU",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		505,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Patrat",
		'fr-fr': "Ratentif",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Watcheck",
				'fr-fr': "Contrôle Radar",
			},
			effect: {
				'en-us': "Look at the top 5 cards of your opponent's deck and put them back on top of his or her deck in any order.",
				'fr-fr': "Regardez les 5 cartes du dessus du deck de votre adversaire et replacez-les sur le dessus de son deck dans l'ordre de votre choix.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Quick Tail Smash",
				'fr-fr': "Rapid'Claqueue",
			},
			effect: {
				'en-us': "Before doing damage, you may flip a coin. If heads, this attack does 60 more damage. If tails, this attack does nothing.",
				'fr-fr': "Avant d'infliger des dégâts, vous pouvez lancer une pièce. Si c'est face, cette attaque inflige 60 dégâts supplémentaires. Si c'est pile, cette attaque ne fait rien.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When they see an enemy, their tails stand high, and they spit the seeds of berries stored in their cheek pouches.",
	},

	thirdParty: {
		cardmarket: 280044,
		tcgplayer: 90496
	}
}

export default card
