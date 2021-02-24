import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Munchlax",
		fr: "Goinfrex",
	},
	illustrator: "sowsow",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		446,
	],
	hp: 60,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Snack Search",
				fr: "Le Quatre-Heures",
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, put a card from your discard pile on top of your deck. If you use this Ability, your turn ends.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, placez une carte de votre pile de défausse sur le dessus de votre deck. Si vous utilisez ce talent, votre tour se termine.",
			},
		},
	],







}

export default card
