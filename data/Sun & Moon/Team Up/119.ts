import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Dragonite",
		fr: "Dracolosse",
	},
	illustrator: "Megumi Mizutani",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		149,
	],
	hp: 160,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Dragonair",
		fr: "Draco",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Fast Call",
				fr: "Appel Rapide",
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for a Supporter card, reveal it, and put it into your hand. Then, shuffle your deck.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher une carte Supporter dans votre deck, la montrer, puis l’ajouter à votre main. Mélangez ensuite votre deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Dragon Claw",
				fr: "Dracogriffe",
			},

			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
