import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Mr. Mime",
		fr: "M. Mime",
	},
	illustrator: "TOKIYA",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		122,
	],
	hp: 80,
	types: [
		"Fairy",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Trick",
				fr: "Tourmagik",
			},
			effect: {
				en: "Move a Pokémon Tool card attached to 1 of either player’s Pokémon to another of that player’s Pokémon that doesn’t already have a Pokémon Tool attached to it. If there is no Pokémon to move the Pokémon Tool card to, this attack does nothing.",
				fr: "Déplacez une carte Outil Pokémon attachée à un Pokémon de l'un des joueurs vers un autre de ses Pokémon auquel un Outil Pokémon n'est pas déjà attaché. S'il n'y a aucun Pokémon vers lequel déplacer la carte Outil Pokémon, cette attaque ne fait rien.",
			},

		},
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Lock Up",
				fr: "Cage",
			},
			effect: {
				en: "The Defending Pokémon can’t retreat during your opponent’s next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
			},
			damage: 30,

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
