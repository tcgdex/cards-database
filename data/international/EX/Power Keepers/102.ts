import { Card } from 'models/database/card'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		'en-us': "Vaporeon ☆",
		'fr-fr': "Aquali ☆",
		'de-de': "Aquana ☆"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		134,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Blue Ray",
				'fr-fr': "Rayon bleu",
				'de-de': "Blauer Strahl"
			},
			effect: {
				'en-us': "Once during your turn, when you put Vaporeon ☆ from your hand onto your Bench, you may remove all Special Conditions and 3 damage counters from each Active Pokémon (both yours and your opponent's).",
				'fr-fr': "Une seule fois lors de votre tour, lorsque vous placez Aquali ☆ de votre main sur votre Banc, vous pouvez retirer aux Pokémon Actifs (les vôtres et ceux de votre adversaire) tous leurs États Spéciaux ainsi que 3 marqueurs de dégât.",
				'de-de': "Einmal während deines Zuges, wenn du Aquana ☆ von deiner Hand auf deine Bank legst, kannst du alle Speziellen Zustände und 3 Schadensmarken von allen Aktiven Pokémon (deine und die deines Gegners) entfernen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Whirlpool",
				'fr-fr': "Siphon",
				'de-de': "Whirlpool"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une carte Énergie attachée au Pokémon Défenseur.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" lege eine Energiekarte, die am Verteidigenden Pokémon angelegt ist, auf den Ablagestapel deines Gegners."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		tcgplayer: 90292
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card

