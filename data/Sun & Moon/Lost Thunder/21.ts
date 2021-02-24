import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Grovyle",
		fr: "Massko",
	},
	illustrator: "Ayaka Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		253,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Treecko",
		fr: "Arcko",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sunshine Grace",
				fr: "Grâce Solaire",
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for a Grass Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher un Pokémon Grass dans votre deck, le montrer, puis l’ajouter à votre main. Mélangez ensuite votre deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Slicing Blade",
				fr: "Lame Tranchante",
			},

			damage: 40,

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
