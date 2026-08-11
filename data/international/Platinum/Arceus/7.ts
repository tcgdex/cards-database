import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Probopass",
		'de-de': "Voluminas"
	},

	illustrator: "Kouki Saitou",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [476],
	
	hp: 100,

	types: [
		"Metal"
	],

	evolveFrom: {
		'en-us': "Nosepass"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Competitiveness",
				'de-de': "Konkurrenzdenken"
			},
			effect: {
				'en-us': "If you don't have a Supporter card in play, each of Probopass's attacks does 30 more damage to the Active Pokémon (before applying Weakness and Resistance).",
				'de-de': "Wenn du keine Unterstützerkarte im Spiel hast, fügen alle Angriffe von Voluminas den Aktiven Pokémon 30 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Top Chop",
				'de-de': "Ziehschlag"
			},
			effect: {
				'en-us': "Draw a card.",
				'de-de': "Ziehe 1 Karte."
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tumbling Attack",
				'de-de': "Sturzangriff"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 50 damage plus 30 more damage.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 50 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "50+",

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88378,
				cardmarket: 278879
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278879,
				tcgplayer: 88378
			}
		},
	],

}

export default card
