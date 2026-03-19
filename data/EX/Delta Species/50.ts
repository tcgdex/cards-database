import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Persian",
		fr: "Persian",
		de: "Snobilikat"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		53,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Meowth",
		fr: "Miaouss"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Prowl",
				fr: "Rôder",
				de: "Prowl"
			},
			effect: {
				en: "Once during your turn, when you play Persian from your hand to evolve 1 of your Pokémon, you may search your deck for any 1 card and put it into your hand. Shuffle your deck afterward.",
				fr: "Une seule fois lors de votre tour, lorsque vous jouez Persian de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez choisir dans votre deck n'importe quelle carte et la placer dans votre main. Ensuite, mélangez votre deck.",
				de: "Once during your turn, when you play Persian from your hand to evolve 1 of your Pokémon, you may search your deck for any 1 card and put it into your hand. Shuffle your deck afterward."
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
				en: "Snap Tail",
				fr: "Claquement de queue",
				de: "Snap Tail"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 276813,
		tcgplayer: 87985
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

