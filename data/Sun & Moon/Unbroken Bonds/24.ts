import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Darmanitan",
		fr: "Darumacho",
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		555,
	],
	hp: 130,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Darumaka",
		fr: "Darumarond",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Find Wildfire",
				fr: "Traqueur de Feu de Forêt",
			},
			effect: {
				en: "Search your deck for up to 3 Fire Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
				fr: "Cherchez jusqu’à 3 cartes Énergie Fire dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Flare Blitz",
				fr: "Boutefeu",
			},
			effect: {
				en: "Discard all Fire Energy from this Pokémon.",
				fr: "Défaussez toute l’Énergie Fire de ce Pokémon.",
			},
			damage: 110,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
