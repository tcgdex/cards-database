import { Card } from 'models/database/card'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Arcanine",
		'fr-fr': "Arcanin"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		59,
	],

	hp: 70,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Growlithe",
		'fr-fr': "Caninos"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Quick Attack",
				'fr-fr': "Vive-attaque"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires ; si c'est pile, cette attaque inflige 10 dégâts."
			},
			damage: "10+",

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Flames of Rage",
				'fr-fr': "Flammes de rage"
			},
			effect: {
				'en-us': "Discard 2 Energy cards attached to Arcanine in order to use this attack. This attack does 40 damage plus 10 more damage for each damage counter on Arcanine.",
				'fr-fr': "Défaussez 2 cartes Énergie  attachées à Arcanin pour pouvoir utiliser cette attaque. Cette attaque inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégâts sur Arcanin."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "A legendary Pokémon famous for its beauty. It looks almost as if it flies when it runs.",
		'fr-fr': "Un Pokémon légendaire réputé pour sa beauté. Il galope si vite qu'il semble voler."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83578
			},
		},
	]
}

export default card
