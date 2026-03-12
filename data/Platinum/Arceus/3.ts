import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Heatran",
		de: "Heatran"
	},

	illustrator: "Keiko Moritsugu",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		485,
	],
	
	hp: 100,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Fang",
				de: "Feuerzahn"
			},
			effect: {
				en: "The Defending Pokémon is now Burned.",
				de: "Das Verteidigende Pokémon ist jetzt verbrannt."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Magma Mantle",
				de: "Magmahülle"
			},
			effect: {
				en: "Discard the top 3 cards of your deck. This attack does 60 damage plus 20 more damage for each Fire or Metal Energy card you discarded.",
				de: "Lege die obersten 3 Karten deines Decks auf deinen Ablagestapel. Dieser Angriff fügt 60 Schadenspunkte plus 20 weitere Schadenspunkte für jede auf diese Weise auf den Ablagestapel gelegte - oder -Energiekarte zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 278875,
		tcgplayer: 86050
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
