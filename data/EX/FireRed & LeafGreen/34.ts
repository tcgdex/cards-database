import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Haunter",
		fr: "Spectrum",
		de: "Alpollo"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		93,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Gastly",
		fr: "Fantominus"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Head Trip",
				fr: "La tête la première",
				de: "Head Trip"
			},
			effect: {
				en: "Once during your turn (before your attack), if Haunter is on your Bench, you may use this power. One of your Active Pokémon is now Confused.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez utiliser ce pouvoir si Spectrum est sur votre Banc. Un de vos Pokémon Actifs est maintenant Confus.",
				de: "Once during your turn (before your attack), if Haunter is on your Bench, you may use this power. One of your Active Pokémon is now Confused."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Confuse Ray",
				fr: "Onde folie",
				de: "Confuse Ray"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez utiliser ce pouvoir si Spectrum est sur votre Banc. Un de vos Pokémon Actifs est maintenant Confus.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Confused."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276210,
		tcgplayer: 86025
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
