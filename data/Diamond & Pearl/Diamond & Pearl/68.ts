import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Unown D",
		fr: "Zarbi D",
	},
	illustrator: "Nakaoka",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		201,
	],
	hp: 50,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Draw",
				fr: "DONNER",
			},
			effect: {
				en: "Once during your turn (before your attack), if Unown D is on your Bench, you may flip a coin. If heads, each player may draw a card. (You draw your card first.)",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Zarbi D est sur votre Banc, vous pouvez lancer une pièce. Si c'est face, chaque joueur peut piocher une carte. (Vous piochez votre carte en premier.)",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hidden Power",
				fr: "Puissance cachée",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
