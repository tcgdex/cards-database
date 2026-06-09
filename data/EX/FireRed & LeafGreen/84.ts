import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Venonat",
		fr: "Mimitoss",
		de: "Bluzuk"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		48,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Psycho Waves",
				fr: "Psycho-vagues",
				de: "Psycho Waves"
			},
			effect: {
				en: "Discard an Energy card attached to Venonat. The Defending Pokémon is now Confused.",
				fr: "Défaussez une carte Énergie attachée à Mimitoss. Le Pokémon Défenseur est maintenant Confus.",
				de: "Discard an Energy card attached to Venonat. The Defending Pokémon is now Confused."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
				de: "Bite"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276260,
		tcgplayer: 90307
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
