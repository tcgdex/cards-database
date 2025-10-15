import { Card } from '../../../interfaces'
import Set from '../HGSS Black Star Promos'

const card: Card = {
	name: {
		en: "Latios",
	},
	illustrator: "Wataru Kawahara",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		381,
	],
	hp: 90,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Luster Float",
			},
			effect: {
				en: "If you have Latias in play, the Retreat Cost for Latios is 0.",
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
				en: "Infinite Wing",
			},
			effect: {
				en: "Discard 2 Energy attached to Latios.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],

	variants: [
		{
			type: "holo",
			foil: "cracked-ice"
		},
		{
			type: "holo",
			foil: "cosmos"
		}
	]





}

export default card
