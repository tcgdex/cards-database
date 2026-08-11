import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Galvantula",
		'fr-fr': "Mygavolt",
		'es-es': "Galvantula",
		'it-it': "Galvantula",
		'pt-br': "Galvantula",
		'de-de': "Voltula"
	},

	illustrator: "Mitsuhiro Arita",
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
		'fr-fr': "Statitik",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Electroweb",
				'fr-fr': "Toile Élek",
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Leech Life",
				'fr-fr': "Vampirisme",
			},
			effect: {
				'en-us': "Heal from this Pokémon the same amount of damage you did to the Defending Pokémon.",
				'fr-fr': "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Défenseur.",
			},
			damage: 40,

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
		cardmarket: 279784,
		tcgplayer: 85610
	}
}

export default card
