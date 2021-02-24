import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Blissey",
		fr: "Leuphorie",
	},
	illustrator: "Hideki Ishikawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		242,
	],
	hp: 160,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Chansey",
		fr: "Leveinard",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Fresh Egg",
				fr: "Œuf Frais",
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may heal 80 damage from your Active Pokémon.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez soigner 80 dégâts à votre Pokémon Actif.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double-Edge",
				fr: "Damoclès",
			},
			effect: {
				en: "This Pokémon does 80 damage to itself.",
				fr: "Ce Pokémon s’inflige 80 dégâts.",
			},
			damage: 160,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
