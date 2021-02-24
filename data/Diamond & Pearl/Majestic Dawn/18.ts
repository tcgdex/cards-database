import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Espeon",
		fr: "Mentali",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		196,
	],
	hp: 80,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Eevee",
		fr: "Evoli",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Sunlight Veil",
				fr: "Voile solaire",
			},
			effect: {
				en: "Each of your Pokémon that evolves from Eevee gets +20 HP. You can't use more than 1 Sunlight Veil Poké-Body each turn.",
				fr: "Chacun de vos Pokémon évoluant d'Evoli obtient 20 PV de plus. Vous ne pouvez pas utiliser plus d'1 Poké-Body Voile solaire par tour.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Morning Sun",
				fr: "Aurore",
			},
			effect: {
				en: "You may move an Energy card attached to Espeon to 1 of your Benched Pokémon.",
				fr: "Vous pouvez déplacer une carte Énergie attachée à Mentali sur 1 des Pokémon de votre Banc.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
