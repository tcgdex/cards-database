import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Butterfree",
		fr: "Papilusion",
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		12,
	],
	hp: 130,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Metapod",
		fr: "Chrysacier",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Triple Charge",
				fr: "Triple Charge",
			},
			effect: {
				en: "Search your deck for up to 3 basic Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
				fr: "Cherchez jusqu’à 3 cartes Énergie de base dans votre deck et attachez-les à vos Pokémon, de la manière que vous voulez. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Solar Beam",
				fr: "Lance-Soleil",
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
