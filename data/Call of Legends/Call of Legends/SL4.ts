import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Groudon",
		fr: "Groudon",
	},
	illustrator: "Yuri Umemura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		383,
	],
	hp: 100,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fightning",
				"Fightning",
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Volcano Stomp",
				fr: "Écrasement volcanique",
			},
			effect: {
				en: "Flip a coin. If heads, discard the top 4 cards of your opponent's deck. If tails, discard the top 4 cards of your deck.",
				fr: "Lancez une pièce. Si c’est face, défaussez les 4 premières cartes du deck de votre adversaire. Si c’est pile, défaussez les 4 premières cartes de votre deck.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
