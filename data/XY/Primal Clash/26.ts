import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Torchic",
		fr: "Poussifeu",
	},
	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		255,
	],
	hp: 50,
	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ancient Trait",
			name: {
				fr: "Offensive Ω",
			},
			effect: {
				fr: "Ce Pokémon peut attaquer deux fois par tour. (Si la première attaque met K.O. le Pokémon Actif de votre adversaire, vous pouvez encore attaquer après que votre adversaire a choisi un nouveau Pokémon Actif.)",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Flare Bonus",
				fr: "Fulmi-Bonus",
			},
			effect: {
				en: "Discard a Fire Energy card from your hand. If you do, draw 2 cards.",
				fr: "Défaussez une carte Énergie Fire de votre main. Dans ce cas, piochez 2 cartes.",
			},

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Claw",
				fr: "Ergots",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
