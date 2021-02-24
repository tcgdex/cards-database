import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Lapras",
		fr: "Lokhlass",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		131,
	],
	hp: 110,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Mermaid's Call",
				fr: "Appel de la Sirène",
			},
			effect: {
				en: "Once during your turn (before your attack), you may put a Misty's Favor card from your discard pile into your hand.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer une carte Faveur d’Ondine de votre pile de défausse dans votre main.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Surf",
				fr: "Surf",
			},

			damage: 90,

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
