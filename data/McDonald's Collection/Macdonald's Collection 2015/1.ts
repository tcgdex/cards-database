import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2015'

const card: Card = {
	dexId: [
		252,
	],
	set: Set,
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},
	name: {
		en: "Treecko",
		fr: "Arcko",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: [
		"Grass",
	],
	stage: "Basic",
	thirdParty: {
		tcgplayer: 110429,
	},
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				fr: "Vive-Attaque",
			},
			damage: "10+",
			effect: {
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
			},
		},
	],
}

export default card
