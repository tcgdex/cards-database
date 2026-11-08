import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Light Jolteon",
		'fr-fr': "Voltali lumineux",
		'de-de': "Helles Blitza"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		135,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Pulse Guard",
				'fr-fr': "Pulsation protectrice",
				'de-de': "Pulse Guard"
			},
			effect: {
				'en-us': "During your opponent's next turn, whenever 30 or more damage is done to Light Jolteon (after applying Weakness and Resistance), prevent that damage. (Any other effects of attacks still happen.)",
				'fr-fr': "Pendant le prochain tour de votre adversaire, si Voltali lumineux se voit infliger 30 dégâts ou plus (après application de la Faiblesse et de la Résistance), prévenez ces dégâts. (Tous les autres effets dus à des attaques subsistent.)",
				'de-de': "During your opponent's next turn, whenever 30 or more damage is done to Light Jolteon (after applying Weakness and Resistance), prevent that damage. (Any other effects of attacks still happen.)"
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Thunder Needle",
				'fr-fr': "Pic-éclair",
				'de-de': "Thunder Needle"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 20 damage times the number of heads. If you get 2 or more heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces. Si vous obtenez au moins 2 faces, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Flip 3 coins. This attack does 20 damage times the number of heads. If you get 2 or more heads, the Defending Pokémon is now Paralyzed."
			},
			damage: "20x",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	description: {
		'en-us': "It can collect the ambient electrical energy in its cells and expel it in massive bursts.",
		'fr-fr': "Il peut stocker l'énergie électrique ambiante dans ses cellules et l'expulser sous forme d'explosions massives."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274700,
				tcgplayer: 86741
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274700,
				tcgplayer: 86741
			}
		}
	]
}

export default card
