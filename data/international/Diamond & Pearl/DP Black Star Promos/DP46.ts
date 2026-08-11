import { Card } from 'models/database/card'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Garchomp C",
		'de-de': "Knakrack C"
	},
	illustrator: "Shizurow",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		445,
	],
	hp: 110,
	types: [
		"Colorless",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Healing Breath",
				'de-de': "Heilender Hauch"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), when you put Garchomp  LV.X from your hand onto your Active Garchomp , you may remove all damage counters from each of your Pokémon SP.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn du Knakrack C LV.X von deiner Hand auf dein Aktives Knakrack Pokémon C legst, alle Schadensmarken von jedem deiner Pokémon SP entfernen."
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
				'en-us': "Dragon Rush",
				'de-de': "Drachenstoß"
			},
			effect: {
				'en-us': "Discard 2 Energy attached to Garchomp . Choose 1 of your opponent's Pokémon. This attack does 80 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Garchomp  can't use Dragon Rush during your next turn.",
				'de-de': "Lege 2 an Knakrack C angelegte Energien auf deinen Ablagestapel. Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 80 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) Knakrack C kann Drachenstoß in deinem nächsten Zug nicht einsetzen."
			},

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],

	variants: [
		{
			type: "holo",
		}
	],
}

export default card
