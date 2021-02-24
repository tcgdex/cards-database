import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Forretress",
		fr: "Foretress",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		205,
	],
	hp: 100,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Pineco",
		fr: "Pomdepik",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Thorn Tempest",
				fr: "Tempête d'Épines",
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may put 1 damage counter on each of your opponent's Pokémon.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez placer un marqueur de dégâts sur chacun des Pokémon de votre adversaire.",
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
				en: "Iron Crash",
				fr: "Fer Destructeur",
			},
			effect: {
				en: "This attack does 20 more damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
