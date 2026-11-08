import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Omastar",
		'de-de': "Amoroso"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [139],
	
	hp: 120,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Omanyte"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Time Spiral",
				'de-de': "Zeitspirale"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Evolved Pokémon. Remove the highest Stage Evolution card from that Pokémon and have your opponent shuffle that card into his or her deck.",
				'de-de': "Wähle 1 Pokémon deines Gegners. Entferne die höchste Evolutionskarte vom gewählten Pokémon, dein Gegner mischt diese Karte in sein Deck zurück."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Primal Tentacles",
				'de-de': "Urzeitliche Tentakel"
			},
			effect: {
				'en-us': "Does 30 damage plus 10 more damage for each Helix Fossil, Dome Fossil, and Old Amber in your discard pile.",
				'de-de': "Dieser Angriff fügt 30 Schadenspunkte plus 10 weitere Schadenspunkte für jede Helixfossil-, Domfossil- und Altbernstein-Karte in deinem Ablagestapel zu."
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

	description: {
		'en-us': "It is thought that this Pokémon became extinct because its spiral shell grew too large."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87871,
				cardmarket: 278895
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278895,
				tcgplayer: 87871
			}
		},
	],

}

export default card
