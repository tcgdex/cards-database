import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Salamence",
		fr: "Drattak",
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		373,
	],
	hp: 150,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Shelgon",
		fr: "Drackhaus",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Breakwing",
				fr: "Aile Impitoyable",
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may discard all Pokémon Tool cards attached to each of your opponent's Pokémon.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez défausser toutes les cartes Outil Pokémon attachées à chacun des Pokémon de votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gaia Crush",
				fr: "Anéantissement de Gaïa",
			},
			effect: {
				en: "Discard any Stadium card in play.",
				fr: "Défaussez toute carte Stade en jeu.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
