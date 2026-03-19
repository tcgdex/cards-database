import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Omastar",
		de: "Amoroso"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		139,
	],
	
	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Omanyte",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Time Spiral",
				de: "Zeitspirale"
			},
			effect: {
				en: "Choose 1 of your opponent's Evolved Pokémon. Remove the highest Stage Evolution card from that Pokémon and have your opponent shuffle that card into his or her deck.",
				de: "Wähle 1 Pokémon deines Gegners. Entferne die höchste Evolutionskarte vom gewählten Pokémon, dein Gegner mischt diese Karte in sein Deck zurück."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Primal Tentacles",
				de: "Urzeitliche Tentakel"
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each Helix Fossil, Dome Fossil, and Old Amber in your discard pile.",
				de: "Dieser Angriff fügt 30 Schadenspunkte plus 10 weitere Schadenspunkte für jede Helixfossil-, Domfossil- und Altbernstein-Karte in deinem Ablagestapel zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+30"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278895,
		tcgplayer: 87871
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
