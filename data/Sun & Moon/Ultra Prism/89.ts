import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Solgaleo ◇",
		fr: "Solgaleo ",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		791,
	],
	hp: 160,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Radiant Star",
				fr: "Règle pour les cartes  (Prisme Étoile)",
			},
			effect: {
				en: "For each of your opponent's Pokémon in play, attach a Metal Energy card from your discard pile to your Pokémon in any way you like.",
			},

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Metal",
				"Metal",
			],
			name: {
				en: "Corona Impact",
				fr: "Étoile Soleil Levant",
			},
			effect: {
				en: "This Pokémon can't attack during your next turn.",
				fr: "Pour chaque Pokémon de votre adversaire en jeu, attachez une carte Énergie Metal de votre pile de défausse à vos Pokémon, de la manière que vous voulez.",
			},
			damage: 160,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Metal",
				"Metal",
			],
			name: {
				fr: "Impact de Couronne",
			},
			effect: {
				fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
			},
			damage: 160,

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
