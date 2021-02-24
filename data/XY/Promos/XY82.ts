import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Regigigas",
		fr: "Regigigas",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		486,
	],
	hp: 130,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Earthen Awakening",
				fr: "Réveil Terrestre",
			},
			effect: {
				en: "Whenever you attach an Energy card from your hand to this Pokémon, heal 20 damage from it.",
				fr: "Chaque fois que vous attachez une carte Énergie de votre main à ce Pokémon, soignez 20 dégâts à ce Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gigas Punch",
			},
			effect: {
				en: "Flip 2 coins. If both of them are tails, this attack does nothing.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
