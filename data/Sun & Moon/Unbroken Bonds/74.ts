import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Weezing",
		fr: "Smogogo",
	},
	illustrator: "OOYAMA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		110,
	],
	hp: 120,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Koffing",
		fr: "Smogo",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Detention Gas",
				fr: "Gaz Captif",
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, put 1 damage counter on each of your opponent's Basic Pokémon between turns.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, placez un marqueur de dégâts sur chacun des Pokémon de base de votre adversaire entre chaque tour.",
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
				en: "Splattering Sludge",
				fr: "Boue Éclaboussante",
			},
			effect: {
				en: "This attack does 20 damage to each of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire ayant au moins un marqueur de dégâts. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
