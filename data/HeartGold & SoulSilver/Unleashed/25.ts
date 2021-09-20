import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Torkoal",
		fr: "Chartor",
	},

	illustrator: "Hideaki Hakozaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		324,
	],

	hp: 80,

	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Hot Snort",
				fr: "Grognement ardent",
			},
			effect: {
				en: "Once during your turn when you put Torkoal from your hand onto your Bench, you may flip a coin. If heads, the Defending Pokémon is now Burned.",
				fr: "Une seule fois pendant votre tour, lorsque vous placez Chartor de votre main sur votre Banc, vous pouvez lancer une pièce. Si c’est face, le Pokémon Défenseur est maintenant Brûlé.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flare",
				fr: "Intimidation",
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "You find abandoned coal mines full of them. They dig tirelessly in search of coal."
	}
}

export default card
