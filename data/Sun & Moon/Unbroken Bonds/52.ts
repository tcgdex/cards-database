import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Frogadier",
		fr: "Croâporal",
	},
	illustrator: "Satoshi Shirai",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		657,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Froakie",
		fr: "Grenousse",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Afterimage Strike",
				fr: "Frap’Invisible",
			},
			effect: {
				en: "If any damage is done to this Pokémon by attacks during your opponent's next turn, flip a coin. If heads, prevent that damage.",
				fr: "Si des dégâts sont infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire, lancez une pièce. Si c’est face, évitez ces dégâts.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
