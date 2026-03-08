import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Eevee",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		133,
	],
	hp: 30,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Chain Reaction",
			},
			effect: {
				en: "This power can only be used when a Pokémon evolves. Search your deck for a card that evolves from Eevee and attach it to Eevee. This counts as evolving Eevee. Shuffle your deck afterward. This power can't be used if Eevee is Asleep, Confused, or Paralyzed.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bite",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	variants: [
		{
			type: "holo",
			foil: "cosmos"
		},
		{
			type: "normal"
		}
	]
}

export default card
