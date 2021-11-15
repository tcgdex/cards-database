import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Slaking",
		fr: "Monaflemit"
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		289,
	],
	hp: 120,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Vigoroth",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Lazy",
				fr: "Fainéant"
			},
			effect: {
				en: "As long as Slaking is your Active Pokémon, your opponent's Pokémon can't use any Poké-Powers.",
				fr: "Tant que Monaflemit est votre Pokémon Actif, les Pokémon de votre adversaire ne peuvent pas utiliser de Poké-Powers."
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
				en: "Critical Move",
				fr: "Mouvement décisif"
			},
			effect: {
				en: "Discard a basic Energy card attached to Slaking or this attack does nothing. Slaking can't attack during your next turn.",
				fr: "Défaussez une carte Énergie de base attachée à Monaflemit ou cette attaque est sans effet. Monaflemit ne peut pas attaquer lors de votre prochain tour."
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
