import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Rattata",
		de: "Rattfratz"
	},

	illustrator: "Masako Yamashita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		19,
	],

	hp: 30,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Call for Friends",
				de: "Freunds holen"
			},
			effect: {
				en: "Search your deck for a Baby Pokémon or Basic Pokémon and put it onto your bench. Shuffle your deck afterward. (You can't use this attack it your bench is full.)",
				de: "Durchsuche dein Deck nach einem Baby-Pokémon oder einem basis-Pokémon und lege sie auf deine Bank. Mische dein Deck danach. (Du kannst diesen Angriff nicht verwenden, wenn deine Bank voll ist.)"
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Body Slam",
				de: "Bodyslam"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				de: "Wirf ein Münze. Bei \"Kopf\" ist das verteidigende Pokémon jetzt gelähmt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275348,
		tcgplayer: 88613
	},

	variants: [
		{
			type: 'normal',
		},
		{
			type: 'reverse',
		}
	]
}

export default card
