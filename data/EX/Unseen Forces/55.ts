import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Eevee",
	},
	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		133,
	],
	hp: 40,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Energy Evolution",
			},
			effect: {
				en: "Whenever you attach an Energy card from your hand to Eevee, you may search your deck for a card that evolves from Eevee that is the same type as the Energy card you attached to Eevee. Put that card onto Eevee. (This counts as evolving Eevee.) Shuffle your deck afterward. This power can't be used when you attach an Energy card to Eevee as part of an attack's effect.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tail Whap",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],





}

export default card
