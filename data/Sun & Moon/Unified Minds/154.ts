import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Axew",
		fr: "Coupenotte",
	},
	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		610,
	],
	hp: 60,
	types: [
		"Dragon",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Unnerve",
				fr: "Tension",
			},
			effect: {
				en: "Whenever your opponent plays an Item or Supporter card from their hand, prevent all effects of that card done to this Pokémon.",
				fr: "Chaque fois que votre adversaire joue une carte Objet ou une carte Supporter de sa main, évitez tous les effets de cette carte sur ce Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Metal",
			],
			name: {
				en: "Gnaw",
				fr: "Ronge",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
