import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Croconaw",
		fr: "Crocrodil"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		159,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Totodile",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Evolutionary Vitality",
				fr: "Vitalité d'évolution"
			},
			effect: {
				en: "Once during your turn, when you play Croconaw from your hand to evolve 1 of your Pokémon, you may look at the top 5 cards of your deck. Choose all Energy cards you find there, show them to your opponent, and put them into your hand. Put the other cards back on top of your deck. Shuffle your deck afterward.",
				fr: "Une seule fois lors de votre tour, lorsque vous jouez Crocrodil de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez regarder les 5 du dessus de votre deck. Choisissez-y toutes les cartes Énergie, montrez-les à votre adversaire et placez-les dans votre main. Replacez les autres cartes au dessus de votre deck. Ensuite, mélangez votre deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Hover Over",
				fr: "Flotter"
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	description: {
		fr: "Quand il mord, il ne lâche pas prise avant que ses crocs se brisent. Ils repoussent par la suite."
	}
}

export default card
