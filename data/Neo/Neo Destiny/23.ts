import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Light Lanturn",
		fr: "Lanturn lumineux",
		de: "Helles Lanturn"
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
		en: "Chinchou",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Searchlight",
				fr: "Phare",
				de: "Searchlight"
			},
			effect: {
				en: "Flip a coin. If heads, each player may choose a card from his or her discard pile and put it into his or her hand.",
				fr: "Lancez une pièce. Si c'est face, chaque joueur peut choisir une carte de sa pile de défausse et la placer dans sa main.",
				de: "Flip a coin. If heads, each player may choose a card from his or her discard pile and put it into his or her hand."
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Spark",
				fr: "Étincelle",
				de: "Spark"
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, choose 1 of them and this attack does 10 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Si votre adversaire a des Pokémon sur son Banc, choisissez l'un d'eux et cette attaque lui inflige 10 dégâts. (Ne pas appliquer la Résistance et la Faiblesse au Pokémon du Banc.)",
				de: "If your opponent has any Benched Pokémon, choose 1 of them and this attack does 10 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon)"
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

	description: {
		fr: "La nageoire dorsale de ce Pokémon a évolué pour émettre de la lumière, ce qui attire les poissons dont il se nourrit."
	}
}

export default card
