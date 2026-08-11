import { Card } from 'models/database/card'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		'en-us': "Parasect",
		'fr-fr': "Parasect",
		'de-de': "Parasek"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		47,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Paras",
		'fr-fr': "Paras"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Sleep Pinchers",
				'fr-fr': "Pince dodo",
				'de-de': "Sleep Pinchers"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Asleep."
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
	retreat: 2,


	description: {
		'en-us': "It stays mostly in dark, damp places, the preference not of the bug, but of the big mushrooms on its back.",
		'fr-fr': "Il se cache surtout dans les lieux froids et humides. Ce n'est pas l'insecte qui décide, mais les gros champignons qui lui poussent sur le dos et qui le contrôlent."
	},

	abilities: [{
		name: {
			'fr-fr': "Pollen allergique",
			'de-de': "Allergic Pollen"
		},

		effect: {
			'fr-fr': "Tant que Parasect reste en jeu, les cartes des piles de défausse de tous les joueurs ne sont pas affectées par les attaques ou les Pouvoirs Pokémon. Ce pouvoir ne fonctionne pas si Parasect est Endormi, Confus ou Paralysé.",
			'de-de': "As long as Parasect is in play, cards in any player's discard piles are not affected by attacks or Pokémon Powers. This power stops working, if Parasect becomes Asleep, Confused, or Paralyzed."
		},

		type: "Pokemon Power"
	}],


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274621,
				tcgplayer: 87955
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274621,
				tcgplayer: 87955
			}
		}
	]
}

export default card

