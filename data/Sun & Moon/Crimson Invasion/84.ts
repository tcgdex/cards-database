import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Regigigas",
		fr: "Regigigas",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		486,
	],
	hp: 180,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Seal of Antiquity",
				fr: "Sceau d’Antiquité",
			},
			effect: {
				en: "This Pokémon can't attack unless Regirock, Regice, and Registeel are on your Bench.",
				fr: "Ce Pokémon ne peut pas attaquer, à moins que Regirock, Regice et Registeel ne soient sur votre Banc.",
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
				"Colorless",
			],
			name: {
				en: "Giant Stomp",
				fr: "Piétinement Gigantesque",
			},
			effect: {
				en: "Discard any Stadium card in play.",
				fr: "Défaussez toute carte Stade en jeu.",
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
