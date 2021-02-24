import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Gyarados",
		fr: "Léviator",
	},
	illustrator: "so-taro",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		130,
	],
	hp: 150,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Magikarp",
		fr: "Magicarpe",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Venting Anger",
				fr: "Évacuation de Colère",
			},
			effect: {
				en: "This attack does 50 damage for each Magikarp in your discard pile.",
				fr: "Cette attaque inflige 50 dégâts pour chaque Magicarpe dans votre pile de défausse.",
			},
			damage: 50,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Splash Burn",
				fr: "Éclaboussure Brûlante",
			},
			effect: {
				en: "This attack does 30 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à chacun de vos Pokémon de Banc. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 160,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
