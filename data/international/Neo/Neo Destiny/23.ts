import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Light Lanturn",
		'fr-fr': "Lanturn lumineux",
		'de-de': "Helles Lanturn"
	},

	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		171,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Chinchou",
		'fr-fr': "Loupio"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Searchlight",
				'fr-fr': "Phare",
				'de-de': "Searchlight"
			},
			effect: {
				'en-us': "Flip a coin. If heads, each player may choose a card from his or her discard pile and put it into his or her hand.",
				'fr-fr': "Lancez une pièce. Si c'est face, chaque joueur peut choisir une carte de sa pile de défausse et la placer dans sa main.",
				'de-de': "Flip a coin. If heads, each player may choose a card from his or her discard pile and put it into his or her hand."
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				'en-us': "Spark",
				'fr-fr': "Étincelle",
				'de-de': "Spark"
			},
			effect: {
				'en-us': "If your opponent has any Benched Pokémon, choose 1 of them and this attack does 10 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Si votre adversaire a des Pokémon sur son Banc, choisissez l'un d'eux et cette attaque lui inflige 10 dégâts. (Ne pas appliquer la Résistance et la Faiblesse au Pokémon du Banc.)",
				'de-de': "If your opponent has any Benched Pokémon, choose 1 of them and this attack does 10 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon)"
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
	retreat: 2,


	description: {
		'en-us': "This Pokémon has evolved its dorsal fin to emit light, which attracts the fish it feeds on.",
		'fr-fr': "La nageoire dorsale de ce Pokémon a évolué pour émettre de la lumière, ce qui attire les poissons dont il se nourrit."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274675,
				tcgplayer: 86742
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274675,
				tcgplayer: 86742
			}
		}
	]
}

export default card
