import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Goodra",
		fr: "Muplodocus",
	},
	illustrator: "hatachu",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		706,
	],
	hp: 160,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Sliggoo",
		fr: "Colimucus",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Hydration",
				fr: "Hydratation",
			},
			effect: {
				en: "Whenever you attach a Water Energy card from your hand to this Pokémon, heal 20 damage from it.",
				fr: "Chaque fois que vous attachez une carte Énergie Water de votre main à ce Pokémon, soignez 20 dégâts à ce Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Soaking Horn",
				fr: "Corne Trempage",
			},
			effect: {
				en: "If this Pokémon was healed during this turn, this attack does 80 more damage.",
				fr: "Si ce Pokémon a été soigné pendant ce tour, cette attaque inflige 80 dégâts supplémentaires.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
