import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2014'

const card: Card = {
	dexId: [
		25,
	],
	set: Set,
	illustrator: "MAHOU",
	description: {
		en: "It raises its tail to check its surroundings. The tail is sometimes struck by lightning in this pose.",
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
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Nuzzle",
				fr: "Frotte-Frimousse",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Quick Attack",
				fr: "Vive-Attaque",
			},
			damage: "20+",
			effect: {
				en: "Flip a coin. If heads, this attack does 10 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
			},
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		}
	],
	retreat: 1,
	variants: [
		{
			type: 'holo',
			stamp: ["mcdonalds"],

			thirdParty: {
				cardmarket: 281657,
				tcgplayer: 110410
			}
		}
	]
}

export default card

