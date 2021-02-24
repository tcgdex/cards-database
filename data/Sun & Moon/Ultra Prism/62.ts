import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Lunala ◇",
		fr: "Lunala ",
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		792,
	],
	hp: 160,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Full Moon Star",
				fr: "Règle pour les cartes  (Prisme Étoile)",
			},
			effect: {
				en: "For each of your opponent's Pokémon in play, attach a Psychic Energy card from your discard pile to your Pokémon in any way you like.",
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Psystorm",
				fr: "Étoile Pleine Lune",
			},
			effect: {
				en: "This attack does 20 damage times the amount of Energy attached to all Pokémon.",
				fr: "Pour chaque Pokémon de votre adversaire en jeu, attachez une carte Énergie Psychic de votre pile de défausse à vos Pokémon, de la manière que vous voulez.",
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				fr: "Tempête Psy",
			},
			effect: {
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre d’Énergies attachées aux Pokémon.",
			},
			damage: "20×",

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
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
