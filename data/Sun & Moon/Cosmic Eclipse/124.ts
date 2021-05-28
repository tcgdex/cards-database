import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Lycanroc",
		fr: "Lougaroc",
	},
	illustrator: "so-taro",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		745,
	],
	hp: 120,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Rockruff",
		fr: "Rocabot",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Boiling Blood",
				fr: "Sang Bouillant",
			},
			effect: {
				en: "If your opponent has any Pokémon-GX or Pokémon-EX in play, this Pokémon's attacks cost ColorlessColorlessColorless less.",
				fr: "Si votre adversaire a au moins un Pokémon-GX ou Pokémon-EX en jeu, les attaques de ce Pokémon coûtent ColorlessColorlessColorless de moins.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Voltage Claw",
				fr: "Griffe Volt",
			},
			effect: {
				en: "If your opponent's Active Pokémon has any Special Energy attached to it, this attack does 70 more damage.",
				fr: "Si de l’Énergie spéciale est attachée au Pokémon Actif de votre adversaire, cette attaque inflige 70 dégâts supplémentaires.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
