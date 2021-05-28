import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Furret",
		fr: "Fouinar",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		162,
	],
	hp: 90,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Sentret",
		fr: "Fouinette",
	},
	stage: "Stage1",


	attacks: [
		{

			name: {
				en: "Keen Eye",
				fr: "Regard vif",
			},
			effect: {
				en: "Search your deck for up to 2 cards and put them into your hand. Shuffle your deck afterward.",
				fr: "Choisissez jusqu'à 2 cartes dans votre deck et placez-les dans votre main. Ensuite, mélangez votre deck.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Baton Pass",
				fr: "Relais",
			},
			effect: {
				en: "You may switch Furret with 1 of your Benched Pokémon. If you do, move as many Energy cards attached to Furret as you like to the new Active Pokémon.",
				fr: "Vous pouvez échanger Fouinar avec 1 des Pokémon de votre Banc. Déplacez alors autant de cartes Énergie attachées à Fouinar que vous voulez sur le nouveau Pokémon Actif.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
