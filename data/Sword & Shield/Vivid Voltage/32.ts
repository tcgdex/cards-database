import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Wailord",
		fr: "Wailord"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 200,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Wailmer",
		fr: "Wailmer"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Water Veil",
				fr: "Ignifu-Voile"
			},
			effect: {
				en: "Whenever you attach an Energy card from your hand to this Pokémon, it recovers from all Special Conditions.",
				fr: "Chaque fois que vous attachez une carte Énergie de votre main à ce Pokémon, il guérit de tous les États Spéciaux."
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
				en: "Hydro Pump",
				fr: "Hydrocanon"
			},
			effect: {
				en: "This attack does 40 more damage for each Water Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 40 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 4,
	regulationMark: "D"
}

export default card
