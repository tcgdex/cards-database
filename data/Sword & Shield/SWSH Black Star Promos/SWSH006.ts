import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	name: {
		fr: "Gorythmic",
		en: "Rillaboom"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 170,

	types: [
		"Grass",
	],

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				fr: "Rythme Voltaïque",
				en: "Voltage Beat"
			},
			effect: {
				fr: "Une fois pendant votre tour, vous pouvez chercher dans votre deck jusqu’à 2 cartes Énergie Grass, puis les attacher à l’un de vos Pokémon. Mélangez ensuite votre deck.",
				en: "Once during your turn, you may search your deck for up to 2 Grass Energy cards and attach them to 1 of your Pokémon. Then, shuffle your deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				fr: "Enfoncement",
				en: "Hammer In"
			},

			damage: 140,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,

	evolveFrom: {
		en: "Thwackey",
		fr: "Badabouin"
	}
}

export default card
