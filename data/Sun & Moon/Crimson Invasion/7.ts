import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Karrablast",
		fr: "Carabing",
	},
	illustrator: "OOYAMA",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		588,
	],
	hp: 60,
	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Shell On",
				fr: "Carapace Armée",
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard a Shelmet from your hand. If you do, search your deck for a card that evolves from this Pokémon and put it onto this Pokémon to evolve it. Then, shuffle your deck.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser un Escargaume de votre main. Dans ce cas, cherchez dans votre deck une carte Évolution de ce Pokémon et placez-la sur ce Pokémon pour le faire évoluer. Mélangez ensuite votre deck.",
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
				en: "Peck",
				fr: "Picpic",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
