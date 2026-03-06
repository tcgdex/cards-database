import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Camerupt",
		fr: "Camerupt",
		de: "Camerupt"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		323,
	],

	hp: 90,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Numel",
		fr: "Chamallot"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Back Burner",
				fr: "Brûle-dos",
				de: "Back Burner"
			},
			effect: {
				en: "Search your discard pile for up to 2 basic Energy cards and attach them to your Pokémon in any way you like.",
				fr: "Cherchez dans votre pile de défausse jusqu'à 2 cartes Énergie de base et attachez-les à votre ou vos Pokémon de la façon que vous voulez.",
				de: "Search your discard pile for up 2 basic Energy cards and attach them to your Pokémon in any way you like."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Split Bomb",
				fr: "Bombe fendante",
				de: "Split Bomb"
			},
			effect: {
				en: "Choose 2 of your opponent's Pokémon. This attack does 30 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 2 des Pokémon de votre adversaire. Cette attaque leur inflige 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
				de: "Choose 2 of your opponent's Pokémon. This attack does 30 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 2,

	thirdParty: {
		tcgplayer: 97749,
		cardmarket: 276407
	},

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "holo",
		},
		{
			type: "normal"
		},
	]
}

export default card
