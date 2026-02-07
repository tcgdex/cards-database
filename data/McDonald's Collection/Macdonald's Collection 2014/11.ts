import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2014'

const card: Card = {
	dexId: [
		661,
	],
	set: Set,
	variants: [
		{ type: 'holo', size: 'standard' }
	],
	name: {
		en: "Fletchling",
		fr: "Passerouge",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 50,
	types: [
		"Colorless",
	],
	stage: "Basic",
	thirdParty: {
		tcgplayer: 110416,
	},
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Coupe-Vent",
			},
			damage: "20",
			effect: {
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			},
		},
	],
}

export default card
