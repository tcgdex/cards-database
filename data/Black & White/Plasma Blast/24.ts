import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Relicanth",
		fr: "Relicanth",
		es: "Relicanth",
		it: "Relicanth",
		pt: "Relicanth",
		de: "Relicanth"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		369,
	],

	hp: 90,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fossil Hunt",
				fr: "Chasse au Fossile",
				de: "Fossil-Grabung"
			},
			effect: {
				en: "Put 2 Item cards that have Fossil in their names from your discard pile into your hand.",
				fr: "Ajoutez 2 cartes Objet qui ont Fossile dans leur nom de votre pile de défausse à votre main.",
				de: "Nimm 2 Itemkarten, die das Wort „Fossil“ in ihrem Namen enthalten, von deinem Ablagestapel auf deine Hand."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O",
				de: "Aquaknarre"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "A rare Pokémon discovered during a deep-sea exploration. It has not changed in over 100 million years.",
		de: "Tiefseeforscher fanden dieses seltene Pokémon, das sich in 100 Mio. Jahren nicht verändert hat."
	},

	thirdParty: {
		cardmarket: 281045,
		tcgplayer: 88691
	}
}

export default card
