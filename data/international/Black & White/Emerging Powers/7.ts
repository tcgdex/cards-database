import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Leavanny",
		'fr-fr': "Manternel",
		'es-es': "Leavanny",
		'it-it': "Leavanny",
		'pt-br': "Leavanny",
		'de-de': "Matrifol"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		542,
	],

	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Swadloon",
		'fr-fr': "Couverdure",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Nurturing",
				'fr-fr': "Affection",
			},
			effect: {
				'en-us': "Choose 1 of your Pokémon. Search your deck for a card that evolves from that Pokémon and put it onto that Pokémon. (This counts as evolving that Pokémon.) Shuffle your deck afterward.",
				'fr-fr': "Choisissez 1 de vos Pokémon. Cherchez dans votre deck une carte Évolution du Pokémon choisi et placez-la sur celui-ci. (Cela équivaut à faire évoluer le Pokémon choisi.) Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "X-Scissor",
				'fr-fr': "Plaie-Croix",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 50 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts supplémentaires.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Upon finding a small Pokémon, it weaves clothing for it from leaves, using the cutters on its arms and sticky silk.",
	},

	thirdParty: {
		cardmarket: 279972,
		tcgplayer: 86685
	}
}

export default card
