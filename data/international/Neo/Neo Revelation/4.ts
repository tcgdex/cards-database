import { Card } from 'models/database/card'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		'en-us': "Crobat",
		'fr-fr': "Nostenfer",
		'de-de': "Iksbat"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		169,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Golbat",
		'fr-fr': "Nosferalto"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],

			name: {
				'en-us': "Triggered Poison",
				'fr-fr': "Poison à retardement",
				'de-de': "Triggered Poison"
			},

			effect: {
				'en-us': "If your opponent attaches an Energy card to the Defending Pokémon during his or her next turn, that Pokémon becomes Poisoned.",
				'fr-fr': "Si votre adversaire attache une carte Énergie au Pokémon Défenseur durant son prochain tour, ce Pokémon devient Empoisonné.",
				'de-de': "If your opponent attaches an Energy card to the Defending Pokémon during his or her next turn, that Pokémon becomes Poisoned."
			},

			damage: 20
		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Cross Attack",
				'fr-fr': "Attaque croisée",
				'de-de': "Cross Attack"
			},
			effect: {
				'en-us': "Flip 4 coins. This attack does 20 damage times the number of heads. If you get 2 or more heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez 4 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces. Si vous obtenez au moins deux faces, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Flip 4 coins. This attack does 20 damage times the number of heads. If you get 2 or more heads, the Defending Pokémon is now Confused."
			},
			damage: "20x",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		'en-us': "It flies so silently through the dark on its four wings that it may not be noticed even when nearby.",
		'fr-fr': "Le battement de ses quatre ailes est si silencieux dans la nuit que personne ne remarque sa présence, même s'il est tout près."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274590,
				tcgplayer: 84482
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274590,
				tcgplayer: 84482
			}
		}
	]
}

export default card
