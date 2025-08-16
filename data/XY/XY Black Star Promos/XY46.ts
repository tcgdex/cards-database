import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Altaria",
		fr: "Altaria",
	},

	illustrator: "Naoki Saito",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		334,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Swablu",
		fr: "Tylton",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Clear Humming",
				fr: "Évolution Δ",
			},
			effect: {
				en: "Each of your Colorless Pokémon has no Weakness.",
				fr: "Vous pouvez jouer cette carte de votre main pour faire évoluer un Pokémon pendant votre premier tour ou pendant le tour où vous le jouez.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wing Attack",
				fr: "Cru-Aile",
			},

			damage: 30,

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
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 289709
	}
}

export default card
