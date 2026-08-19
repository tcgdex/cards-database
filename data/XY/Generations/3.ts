import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Caterpie",
		fr: "Chenipan",
		de: "Raupy"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		10,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Adaptive Evolution",
				fr: "Évolution Adaptative",
				de: "Anpassungsfähige Entwicklung"
			},
			effect: {
				en: "This Pokémon can evolve during your first turn or the turn you play it.",
				fr: "Ce Pokémon peut évoluer pendant votre premier tour ou pendant le tour où vous le jouez.",
				de: "Dieses Pokémon kann sich während deines ersten Zuges oder während des Zuges, in dem du es spielst, entwickeln."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Bug Bite",
				fr: "Piqûre",
				de: "Käferbiss"
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

	description: {
		en: "For protection, it releases a horrible stench from the antennae on its head to drive away enemies.",
		de: "Als Schutz vor Feinden sondert es einen übel riechenden Gestank mit seinen Antennen ab."
	},

	thirdParty: {
		cardmarket: 288445,
		tcgplayer: 113661
	}
}

export default card
