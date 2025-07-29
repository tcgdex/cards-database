import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Ponyta",
		fr: "Ponyta",
		de: "Ponita"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		77,
	],

	hp: 40,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Singe",
				fr: "Roussir",
				de: "Versengung"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Burned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Brûlé.",
				de: "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt verbrannt."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Smash Kick",
				fr: "Coud'pattes",
				de: "Schmetterkick"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275001
	}
}

export default card
