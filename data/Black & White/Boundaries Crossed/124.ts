import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Tranquill",
		fr: "Colombeau",
	},
	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		520,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Pidove",
		fr: "Poichigeon",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Air Slash",
				fr: "Lame d'Air",
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie attachée à ce Pokémon.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
