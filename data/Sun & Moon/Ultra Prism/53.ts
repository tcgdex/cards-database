import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Spiritomb",
		fr: "Spiritomb",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		442,
	],
	hp: 70,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Lightless World",
				fr: "Monde Obscur",
			},
			effect: {
				en: "Put 2 Supporter cards from your discard pile into your hand.",
				fr: "Ajoutez 2 cartes Supporter de votre pile de défausse à votre main.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Terrify",
				fr: "Terrifier",
			},
			effect: {
				en: "If the Defending Pokémon is a Basic Pokémon, it can't attack during your opponent's next turn.",
				fr: "Si le Pokémon Défenseur est un Pokémon de base, il ne peut pas attaquer pendant le prochain tour de votre adversaire.",
			},
			damage: 10,

		},
	],


	retreat: 1,



}

export default card
