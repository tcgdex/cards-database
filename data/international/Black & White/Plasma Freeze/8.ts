import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Sceptile",
		'fr-fr': "Jungko",
		'es-es': "Sceptile",
		'it-it': "Sceptile",
		'pt-br': "Sceptile",
		'de-de': "Gewaldro"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		254,
	],

	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Grovyle",
		'fr-fr': "Massko",
	},

	stage: "Stage2",

	attacks: [
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
				'en-us': "Flip a coin. If heads, this attack does 40 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires.",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Energy Bloom",
				'fr-fr': "Énergie Florissante",
			},
			effect: {
				'en-us': "Heal 20 damage from each of your Pokémon that has any Energy attached to it.",
				'fr-fr': "Soignez 20 dégâts à chacun de vos Pokémon auquel de l'Énergie est attachée.",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The leaves that grow on its arms can slice down thick trees. It is without peer in jungle combat.",
	},

	thirdParty: {
		cardmarket: 280886,
		tcgplayer: 88953
	}
}

export default card
