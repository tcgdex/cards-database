import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Galvantula",
		'fr-fr': "Mygavolt",
		'es-es': "Galvantula",
		'it-it': "Galvantula",
		'pt-br': "Galvantula",
		'de-de': "Voltula"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		596,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Joltik",
		'fr-fr': "Statitik"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Quick Turn",
				'fr-fr': "Vif Retournement"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face."
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Electrisilk",
				'fr-fr': "Électrisoie"
			},
			effect: {
				'en-us': "If the Defending Pokémon has no Retreat Cost, this attack does 40 more damage.",
				'fr-fr': "Si le Pokémon Défenseur n'a pas de coût de Retraite, cette attaque inflige 40 dégâts supplémentaires."
			},
			damage: 30,

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
		'en-us': "They employ an electrically charged web to trap their prey. While it is immobilized by shock, they leisurely consume it.",
	},

	thirdParty: {
		cardmarket: 280371,
		tcgplayer: 85612
	}
}

export default card
