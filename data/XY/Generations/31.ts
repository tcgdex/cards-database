import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Golbat",
		fr: "Nosferalto",
	},
	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		42,
	],
	hp: 70,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Zubat",
		fr: "Nosferapti",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sneaky Bite",
				fr: "Morsure Sournoise",
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may put 2 damage counters on 1 of your opponent's Pokémon.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez placer 2 marqueurs de dégâts sur l'un des Pokémon de votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Swoop Across",
				fr: "Déferlement Aérien",
			},
			effect: {
				en: "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

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
			type: "Fightning",
			value: "-20"
		},
	],




}

export default card
