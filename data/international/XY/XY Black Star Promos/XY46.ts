import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Altaria",
		'fr-fr': "Altaria",
	},

	illustrator: "Naoki Saito",
	rarity: "Promo",
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
		'en-us': "Swablu",
		'fr-fr': "Tylton",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Clear Humming",
				'fr-fr': "Évolution Δ",
			},
			effect: {
				'en-us': "Each of your Colorless Pokémon has no Weakness.",
				'fr-fr': "Vous pouvez jouer cette carte de votre main pour faire évoluer un Pokémon pendant votre premier tour ou pendant le tour où vous le jouez.",
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
				'en-us': "Wing Attack",
				'fr-fr': "Cru-Aile",
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

	description: {
		'en-us': "On sunny days, it flies freely through the sky and blends into the clouds. It sings in a beautiful soprano.",
	},

	thirdParty: {
		cardmarket: 553519
	}
}

export default card
