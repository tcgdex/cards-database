import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Cryogonal",
		fr: "Hexagel",
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		615,
	],
	hp: 90,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Frozen Lock",
				fr: "Blocage Givrant",
			},
			effect: {
				en: "Your opponent can't play any Item cards from their hand during their next turn.",
				fr: "Votre adversaire ne peut pas jouer de carte Objet de sa main pendant son prochain tour.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
