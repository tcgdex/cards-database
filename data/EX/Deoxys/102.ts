import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Rayquaza ex",
		fr: "Rayquaza ex",
		de: "Rayquaza ex"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		384,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	suffix: "EX",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Dragon Boost",
				fr: "Propulsion de dragon",
				de: "Dragon Boost"
			},
			effect: {
				en: "Once during your turn, when you put Rayquaza ex from your hand onto your Bench, you may move any number of basic Energy cards attached to your Pokémon to Rayquaza ex.",
				fr: "Une seule fois lors de votre tour, lorsque vous placez Rayquaza ex de votre main sur votre Banc, vous pouvez déplacer n'importe quel nombre de cartes Énergie de base attachées à vos Pokémon sur Rayquaza ex.",
				de: "Once during your turn, when you put Rayquaza ex from your hand onto your Bench, you may move any number of basic Energy cards attached to your Pokémon to Rayquaza ex."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Lightning",
			],
			name: {
				en: "Spiral Blast",
				fr: "Explosion en spirale",
				de: "Spiral Blast"
			},
			effect: {
				en: "Does 20 damage for each basic Energy card attached to Rayquaza ex.",
				fr: "Inflige 20 dégâts pour chaque carte Énergie de base attachée à Rayquaza ex.",
				de: "Does 20 damage for each basic Energy card attached to Rayquaza ex."
			},
			damage: "20x",

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],


	retreat: 2,

	thirdParty: {
		tcgplayer: 88643,
		cardmarket: 276505
	},

	variants: [
		{
			type: "holo",
		}
	]
}

export default card
