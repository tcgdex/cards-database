import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Eelektross",
		fr: "Ohmassacre",
	},
	illustrator: "Shigenori Negishi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		604,
	],
	hp: 150,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Eelektrik",
		fr: "Lampéroie",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Electric Swamp",
				fr: "Marais Électrique",
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is in your hand and you have at least 4 Lightning Energy cards in play, you may play this Pokémon onto your Bench. If you do, move any number of Lightning Energy from your other Pokémon to this Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est dans votre main et si vous avez au moins 4 cartes Énergie Lightning en jeu, vous pouvez jouer ce Pokémon sur votre Banc. Dans ce cas, déplacez autant d’Énergies Lightning que vous voulez de vos autres Pokémon vers ce Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hover Over",
				fr: "Flotter",
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
