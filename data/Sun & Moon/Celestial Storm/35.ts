import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Swampert",
		fr: "Laggron",
	},
	illustrator: "SATOSHI NAKAI",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		260,
	],
	hp: 160,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Marshtomp",
		fr: "Flobio",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Power Draw",
				fr: "Puissance de Pioche",
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard a card from your hand. If you do, draw 3 cards.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une carte de votre main. Dans ce cas, piochez 3 cartes.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydro Pump",
				fr: "Hydrocanon",
			},
			effect: {
				en: "This attack does 20 more damage times the amount of Water Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies Water attachées à ce Pokémon.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
