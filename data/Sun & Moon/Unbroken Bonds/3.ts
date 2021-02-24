import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Metapod",
		fr: "Chrysacier",
	},
	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		11,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Caterpie",
		fr: "Chenipan",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Emerge",
				fr: "Émerge",
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, search your deck for a card that evolves from this Pokémon and put it onto this Pokémon to evolve it. Then, shuffle your deck.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, cherchez dans votre deck une carte qui évolue de ce Pokémon, puis placez-la sur ce Pokémon pour le faire évoluer. Mélangez ensuite votre deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bug Bite",
				fr: "Piqûre",
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

	retreat: 3,



}

export default card
