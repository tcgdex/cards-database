import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Clefairy",
		fr: "Mélofée",
		de: "Piepi"
	},

	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		35,
	],

	hp: 60,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Pound",
				fr: "Écras’Face",
				de: "Pfund"
			},

			damage: 10,

		},
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Moon Dance",
				fr: "Danse à la Lune",
				de: "Mondtanz"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "They're popular, but they're rare. Trainers who show them off recklessly may be targeted by thieves.",
		de: "Dieses beliebte Pokémon hat Seltenheitswert. Wer leichtsinnig damit prahlt, eins zu haben, könnte in das Visier von Dieben geraten."
	},

	thirdParty: {
		cardmarket: 394597,
		tcgplayer: 197683
	}
}

export default card
