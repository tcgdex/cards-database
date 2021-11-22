import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Feraligatr",
		fr: "Aligatueur"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		160,
	],

	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Croconaw",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Riptide",
				fr: "Courant"
			},
			effect: {
				en: "Does 10 damage plus 10 damage times the number of Energy cards in your discard pile. Then, shuffle all Energy cards from your discard pile into your deck.",
				fr: "Inflige 10 dégâts plus 10 dégâts multipliés par le nombre de cartes Énergie  dans votre pile de défausse. Ensuite, mélangez toutes les cartes Énergie  de votre pile de défausse dans votre deck."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	description: {
		fr: "Il lui est difficile de supporter son propre poids hors de l'eau, c'est pourquoi il se met à quatre pattes. Mais il se déplace rapidement."
	},

	abilities: [{
		name: {
			fr: "Averse"
		},

		effect: {
			fr: "Aussi souvent que vous le souhaitez pendant votre tour (avant votre attaque), vous pouvez défausser une carte Énergie  de votre main. Ce pouvoir ne peut être utilisé si Aligatueur est Endormi, Confus ou Paralysé."
		},

		type: "Pokemon Power"
	}]
}

export default card
