import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Wynaut",
		fr: "Okéoké",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		360,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Peppy Pick",
				fr: "Choisillon",
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, choose a random card from your opponent's hand. Your opponent reveals that card and shuffles it into their deck. If you use this Ability, your turn ends.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, choisissez une carte au hasard de la main de votre adversaire. Votre adversaire montre la carte choisie et la mélange avec son deck. Si vous utilisez ce talent, votre tour se termine.",
			},
		},
	],







}

export default card
