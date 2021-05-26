import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Banette",
		fr: "Branette",
	},
	illustrator: "Eri Yamaki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		354,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Shuppet",
		fr: "Polichombr",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Red Eyes",
				fr: "Regard Rouge",
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put a Basic Pokémon from your opponent's discard pile onto their Bench.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez placer l’un des Pokémon de base de la pile de défausse de votre adversaire sur son Banc.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Enemy Show",
				fr: "Spectacle Ennemi",
			},
			effect: {
				en: "For each of your opponent's Pokémon in play, put 1 damage counter on your opponent's Pokémon in any way you like.",
				fr: "Pour chaque Pokémon en jeu de votre adversaire, placez un marqueur de dégâts sur les Pokémon de votre adversaire de la manière que vous voulez.",
			},

		},
	],
	weaknesses: [
		{
			type: "Darkness",
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



}

export default card
