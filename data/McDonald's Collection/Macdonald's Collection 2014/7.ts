import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2014'

const card: Card = {
	dexId: [
		679,
	],
	set: Set,
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},
	name: {
		en: "Honedge",
		fr: "Monorpale",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: [
		"Metal",
	],
	stage: "Basic",
	thirdParty: {
		tcgplayer: 110412,
	},
	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				fr: "Perpétranche",
			},
			damage: "30×",
			effect: {
				fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
			},
		},
	],
}

export default card
