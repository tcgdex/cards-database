import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Guzzlord",
		fr: "Engloutyran",
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		799,
	],
	hp: 160,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Lord's Valley",
				fr: "Vallée du Tyran",
			},
			effect: {
				en: "If you have exactly 2, 4, or 6 Prize cards remaining, discard the top 10 cards of your deck.",
				fr: "S’il vous reste exactement 2, 4 ou 6 cartes Récompense, défaussez les 10 cartes du dessus de votre deck.",
			},
			damage: 160,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 4,



}

export default card
