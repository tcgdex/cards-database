import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2014'

const card: Card = {
	dexId: [
		25,
	],
	set: Set,
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},
	name: {
		en: "Pikachu",
		fr: "Pikachu",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: [
		"Lightning",
	],
	stage: "Basic",
	thirdParty: {
		tcgplayer: 110410,
	},
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Frotte-Frimousse",
			},
			effect: {
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Vive-Attaque",
			},
			damage: "20+",
			effect: {
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
			},
		},
	],
}

export default card
