import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Raikou Star",
		fr: "Raikou ☆",
		de: "Raikou *"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		243,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Lightning Turn",
				fr: "Tour éclair",
				de: "Lightning Turn"
			},
			effect: {
				en: "Switch Raikou Star with 1 of your Benched Pokémon.",
				fr: "Échangez Raikou  avec 1 des Pokémon de votre Banc.",
				de: "Switch Raikou * with 1 of your Benched Pokémon."
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Meta Voltage",
				fr: "Méta voltage",
				de: "Meta Voltage"
			},
			effect: {
				en: "If you have less Prize cards left than your opponent, this attack does 40 damage to each of your Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "S'il vous reste moins de cartes Récompense que votre adversaire, cette attaque inflige 40 dégâts à chacun de vos Pokémon. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "If you have lass Prize cards leftthan your opponent, this attack does 40 damage to each of your Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},
			damage: 70,

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
		tcgplayer: 88537
	},

	variants: [
		{
			type: "holo",
		},
	]
}

export default card
