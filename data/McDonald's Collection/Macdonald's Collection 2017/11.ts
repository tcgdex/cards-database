import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2017'

const card: Card = {
	dexId: [
		731,
	],
	set: Set,
	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false,
	},
	name: {
		en: "Pikipek",
		fr: "Picassaut",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 50,
	types: [
		"Colorless",
	],
	stage: "Basic",
	thirdParty: {
		tcgplayer: 152692,
	},
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Éclate-Roc",
			},
			damage: "10+",
			effect: {
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
			},
		},
	],
}

export default card
