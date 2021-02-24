import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Xerneas ◇",
		fr: "Xerneas ",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		716,
	],
	hp: 160,
	types: [
		"Fairy",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Path of Life",
				fr: "Chemin de l’Existence",
			},
			effect: {
				en: "Once during your turn, when this Pokémon moves from your Bench to become your Active Pokémon, you may move any number of Energy from your other Pokémon to it.",
				fr: "Une seule fois pendant votre tour, lorsque ce Pokémon se déplace de votre Banc pour devenir votre Pokémon Actif, vous pouvez déplacer autant d’Énergies que vous voulez de vos autres Pokémon vers lui.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fairy",
				"Fairy",
				"Fairy",
			],
			name: {
				en: "Bright Horns",
				fr: "Règle pour les cartes  (Prisme Étoile)",
			},
			effect: {
				en: "This Pokémon can't use Bright Horns during your next turn.",
			},
			damage: 160,

		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Fairy",
			],
			name: {
				fr: "Cornes Lumineuses",
			},
			effect: {
				fr: "Ce Pokémon ne peut pas utiliser Cornes Lumineuses pendant votre prochain tour.",
			},
			damage: 160,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
