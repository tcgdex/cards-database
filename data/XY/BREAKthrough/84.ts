import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Gallade",
		fr: "Gallame",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		475,
	],
	hp: 150,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Kirlia",
		fr: "Kirlia",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Premonition",
				fr: "Présage",
			},
			effect: {
				en: "Once during your turn (before your attack), you may look at the top 5 cards of your deck and put them back on top of your deck in any order.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez regarder les 5 cartes du dessus de votre deck et les replacer sur le dessus de votre deck dans l'ordre de votre choix.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sensitive Blade",
				fr: "Lame Sensible",
			},
			effect: {
				en: "If you played a Supporter card from your hand during this turn, this attack does 70 more damage.",
				fr: "Si vous avez joué une carte Supporter de votre main pendant ce tour, cette attaque inflige 70 dégâts supplémentaires.",
			},
			damage: "60+",

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
