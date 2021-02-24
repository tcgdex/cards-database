import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Exploud",
		fr: "Brouhabam",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		295,
	],
	hp: 140,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Loudred",
		fr: "Ramboum",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ambush",
				fr: "Embuscade",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires.",
			},
			damage: 80,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cacophony",
				fr: "Cacophonie",
			},
			effect: {
				en: "At the end of your opponent's next turn, discard the Defending Pokémon and all cards attached to it.",
				fr: "À la fin du prochain tour de votre adversaire, défaussez le Pokémon Défenseur et toutes les cartes qui lui sont attachées.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
