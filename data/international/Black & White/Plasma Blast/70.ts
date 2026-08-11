import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Druddigon",
		'fr-fr': "Drakkarmin",
		'es-es': "Druddigon",
		'it-it': "Druddigon",
		'pt-br': "Druddigon",
		'de-de': "Shardrago"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		621,
	],

	hp: 100,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Big Swing",
				'fr-fr': "Vaste Oscillation",
			},
			effect: {
				'en-us': "Flip 2 coins. If either of them is tails, this attack does nothing.",
				'fr-fr': "Lancez 2 pièces. Si vous obtenez au moins un côté pile, cette attaque ne fait rien.",
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Shred",
				'fr-fr': "Déchiquetage",
			},
			effect: {
				'en-us': "This attack's damage isn't affected by any effects on the Defending Pokémon.",
				'fr-fr': "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Défenseur.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It runs through the narrow tunnels formed by Excadrill and Onix. It uses its sharp claws to catch prey.",
	},

	thirdParty: {
		cardmarket: 281091,
		tcgplayer: 84980
	}
}

export default card
