import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Reuniclus",
		'fr-fr': "Symbios",
		'es-es': "Reuniclus",
		'it-it': "Reuniclus",
		'pt-br': "Reuniclus",
		'de-de': "Zytomega"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		579,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Duosion",
		'fr-fr': "Méios",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Future Sight",
				'fr-fr': "Prescience",
			},
			effect: {
				'en-us': "Look at the top 5 cards of your deck and put them back on top of your deck in any order.",
				'fr-fr': "Regardez les 5 cartes du dessus de votre deck et replacez-les sur le dessus de votre deck dans l'ordre de votre choix.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Net Force",
				'fr-fr': "Force Accrue",
			},
			effect: {
				'en-us': "Does 40 damage times the number of Reuniclus you have in play.",
				'fr-fr': "Inflige 40 dégâts multipliés par le nombre de Symbios que vous avez en jeu.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "When Reuniclus shake hands, a network forms between their brains, increasing their psychic power.",
	},

	thirdParty: {
		cardmarket: 280175,
		tcgplayer: 88720
	}
}

export default card
