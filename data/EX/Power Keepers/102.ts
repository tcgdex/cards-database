import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Vaporeon Star",
		fr: "Aquali",
		de: "Aquana *"
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
				en: "Blue Ray",
				fr: "Rayon bleu",
				de: "Blauer Strahl"
			},
			effect: {
				en: "Once during your turn, when you put Vaporeon Star from your hand onto your Bench, you may remove all Special Conditions and 3 damage counters from each Active Pokémon (both yours and your opponent's).",
				fr: "Une seule fois lors de votre tour, lorsque vous placez Aquali  de votre main sur votre Banc, vous pouvez retirer aux Pokémon Actifs (les vôtres et ceux de votre adversaire) tous leurs États Spéciaux ainsi que 3 marqueurs de dégât.",
				de: "Einmal während deines Zuges, wenn du Aquana ☆ von deiner Hand auf deine Bank legst, kannst du alle Speziellen Zustände und 3 Schadensmarken von allen Aktiven Pokémon (deine und die deines Gegners) entfernen."
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
				en: "Whirlpool",
				fr: "Siphon",
				de: "Whirlpool"
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est face, défaussez une carte Énergie attachée au Pokémon Défenseur.",
				de: "Wirf 1 Münze. Bei \"Kopf\" lege eine Energiekarte, die am Verteidigenden Pokémon angelegt ist, auf den Ablagestapel deines Gegners."
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
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

