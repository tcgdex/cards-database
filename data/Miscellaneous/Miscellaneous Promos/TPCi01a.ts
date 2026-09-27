import { Card } from '../../../interfaces'
import Set from '../Miscellaneous Promos'

const card: Card = {
	name: {
		en: "Doug Ferguson-GX",
	},
	illustrator: "Mike Cressy",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,

	hp: 350,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "GX",
	retreat: 0,

	abilities: [
		{
			type: "Ability",
			name: {
				en: "New Chapter",
			},
			effect: {
				en: "You can't play this Pokémon in your deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Metal",
			],
			name: {
				en: "Develop a Product-GX",
			},
			effect: {
				en: "Open any Pokémon TCG box and add the promo card to your deck. (You can't use more than 1 GX attack in a game.)",
			},
		},
	],
}

export default card
