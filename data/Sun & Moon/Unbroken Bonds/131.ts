import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Cleffa",
		fr: "Mélo",
	},
	illustrator: "Shibuzoh.",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		173,
	],
	hp: 60,
	types: [
		"Fairy",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Excitable Draw",
				fr: "Pioche Émotive",
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, shuffle your hand into your deck and then draw 6 cards. If you use this Ability, your turn ends.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, mélangez votre main avec votre deck, puis piochez 6 cartes. Si vous utilisez ce talent, votre tour se termine.",
			},
		},
	],







}

export default card
