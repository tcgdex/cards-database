import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Cradily",
		fr: "Vacilys",
		es: "Cradily",
		it: "Cradily",
		pt: "Cradily",
		de: "Wielie"
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		346,
	],
	hp: 120,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Lileep",
		fr: "Lilia",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Lifesplosion",
				fr: "Explovie",
			},
			effect: {
				en: "For each Energy attached to this Pokémon, search your deck for a Stage 2 Pokémon and put it onto your Bench. Shuffle your deck afterward.",
				fr: "Pour chaque Énergie attachée à ce Pokémon, cherchez un Pokémon de Niveau 2 dans votre deck et placez-le sur votre Banc. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spiral Drain",
				fr: "Spirale Épuisante",
			},
			effect: {
				en: "Heal 20 damage from this Pokémon.",
				fr: "Soignez 20 dégâts à ce Pokémon.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
