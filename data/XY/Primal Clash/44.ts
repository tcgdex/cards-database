import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Milotic",
		fr: "Milobellus",
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		350,
	],
	hp: 110,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Feebas",
		fr: "Barpau",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sparkling Ripples",
				fr: "Ondes Étincelantes",
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may put a card from your discard pile into your hand.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez ajouter une carte de votre pile de défausse à votre main.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aqua Swirl",
				fr: "Tourbillon Aquatique",
			},
			effect: {
				en: "You may have your opponent switch his or her Active Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Vous pouvez demander à votre adversaire d'échanger son Pokémon Actif avec l'un de ses Pokémon de Banc.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
