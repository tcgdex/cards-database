import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Magmortar",
		fr: "Maganon",
	},
	illustrator: "PLANETA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		467,
	],
	hp: 120,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Magmar",
		fr: "Magmar",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Flame Charge",
				fr: "Nitrocharge",
			},
			effect: {
				en: "Search your deck for a Fire Energy card and attach it to this Pokémon. Shuffle your deck afterward.",
				fr: "Cherchez une carte Énergie Fire dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Twin Bursts",
				fr: "Explosions en Duo",
			},
			effect: {
				en: "If Electivire is on your Bench, this attack does 80 more damage.",
				fr: "Si Élekable est sur votre Banc, cette attaque inflige 80 dégâts supplémentaires.",
			},
			damage: 80,

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
