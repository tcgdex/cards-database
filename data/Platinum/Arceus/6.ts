import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Mothim",
		de: "Moterpel"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		414,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Burmy",
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				en: "Cloak Party",
				de: "Umhangteam"
			},
			effect: {
				en: "Search your deck for up to 3 in any combination of Burmy and Wormadam, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
				de: "Durchsuche dein Deck nach bis zu 3 Karten in beliebiger Kombination aus Burmy- und Burmadame-Karten, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Assist",
				de: "Energieförderung"
			},
			effect: {
				en: "Search your discard pile for a basic Energy card and attach it to 1 of your Benched Pokémon.",
				de: "Durchsuche deinen Ablagestapel nach 1 Basis-Energiekarte und lege sie an 1 Pokémon auf deiner Bank an."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	thirdParty: {
		cardmarket: 278878,
		tcgplayer: 87583
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse",
		}
	]
}

export default card
