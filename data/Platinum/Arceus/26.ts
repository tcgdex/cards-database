import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Porygon-Z",
		de: "Porygon-Z G"
	},

	illustrator: "Nobuyuki Fujimoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		474,
	],
	
	hp: 80,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Dowsing Code",
				de: "Wünschelrutencode"
			},
			effect: {
				en: "Once during your turn, when you put Porygon-Z from your hand onto your Bench, you may search your discard pile for up to 2 Pokémon Tool cards, show them to your opponent, and shuffle them into your deck.",
				de: "Einmal während deines Zuges kannst du, wenn du Porygon-Z G von deiner Hand auf die Bank legst, deinen Ablagestapel nach bis zu 2 Pokémon-Ausrüstungs-Karten durchsuchen, sie deinem Gegner zeigen und in dein Deck mischen."
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
				en: "Ambush",
				de: "Hinterhalt"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 40 more damage.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 20 Schadenspunkte plus 40 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278898,
		tcgplayer: 88320
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
		}
	]
}

export default card
