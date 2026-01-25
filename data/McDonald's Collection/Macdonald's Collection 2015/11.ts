import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2015'

const card: Card = {
	dexId: [
		263,
	],
	set: Set,
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},
	name: {
		en: "Zigzagoon",
		fr: "Zigzaton",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: [
		"Colorless",
	],
	stage: "Basic",
	thirdParty: {
		tcgplayer: 110423,
	},
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Jet de Sable",
			},
			effect: {
				fr: "Si le Pokémon Défenseur essaie d'attaquer pendant le prochain tour de votre adversaire, ce dernier lance une pièce. Si c'est pile, son attaque ne fait rien.",
			},
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Coup d'Boule",
			},
			damage: "20",
		},
	],
}

export default card
