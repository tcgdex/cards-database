import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Lapras",
		fr: "Lokhlass",
		es: "Lapras",
		it: "Lapras",
		pt: "Lapras",
		de: "Lapras"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		131,
	],

	hp: 100,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Cleanse Away",
				fr: "Soin Groupé",
				de: "Wunden lecken"
			},
			effect: {
				en: "Heal 30 damage from each of your Benched Pokémon.",
				fr: "Soignez 30 dégâts à chacun de vos Pokémon de Banc.",
				de: "Heile 30 Schadenspunkte bei jedem Pokémon auf deiner Bank."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Surf",
				fr: "Surf",
				de: "Surfer"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "Able to understand human speech and very intelligent, it loves to swim in the sea with people on its back.",
		de: "Ein schlaues Pokémon, das die Sprache der Menschen versteht und ihnen liebend gern seine Fährdienste anbietet."
	},

	thirdParty: {
		cardmarket: 281038,
		tcgplayer: 86624
	}
}

export default card
