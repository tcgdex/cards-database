import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Gyarados",
		fr: "Léviator",
	},
	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		130,
	],
	hp: 150,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Magikarp",
		fr: "Magicarpe",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Distilled Blast",
				fr: "Explosion Distillée",
			},
			effect: {
				en: "Reveal the top 7 cards of your deck. This attack does 30 more damage times the amount of Water Energy you find there. Then, shuffle those Energy cards back into your deck and discard the other cards.",
				fr: "Montrez les 7 cartes du dessus de votre deck. Cette attaque inflige 30 dégâts supplémentaires multipliés par le nombre d’Énergies Water que vous y trouvez. Ensuite, mélangez ces cartes Énergie avec votre deck et défaussez les autres cartes.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Hyper Beam",
				fr: "Ultralaser",
			},
			effect: {
				en: "Discard an Energy from your opponent's Active Pokémon.",
				fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
