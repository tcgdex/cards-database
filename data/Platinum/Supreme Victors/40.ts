import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Roserade C",
		fr: "Roserade ",
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		407,
	],
	hp: 90,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Natural Cure",
				fr: "Remède naturel",
			},
			effect: {
				en: "When you attach an Energy card from your hand to Roserade C, remove all Special Conditions from Roserade C.",
				fr: "Lorsque vous attachez une carte Énergie de votre main à Roserade , retirez-lui tous ses États Spéciaux.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Magical Leaf",
				fr: "Feuillemagik",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 damage plus 20 more damage and remove 2 damage counters from Roserade C.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires tout en retirant 2 marqueurs de dégât à Roserade .",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
