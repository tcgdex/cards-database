import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Marshtomp",
		fr: "Flobio",
		de: "Moorabbel"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		259,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Mudkip",
		fr: "Gobou",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Plunge",
				fr: "Plongeon",
				de: "Untertauchen"
			},
			effect: {
				en: "Once during your turn (before your attack), if Marshtomp is on your Bench, you may flip a coin. If heads, move all Energy cards attached to your Active Pokémon to Marshtomp. If you do, switch Marshtomp with that Active Pokémon.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Flobio se trouve sur votre Banc, vous pouvez lancer une pièce. Si c'est face, déplacez toutes les cartes Énergie attachées à votre Pokémon Actif sur Flobio. Échangez alors Flobio avec ce Pokémon Actif.",
				de: "Einmal während deines Zuges (vor deinem Angriff), wenn Moorabbel auf deiner Bank ist, kannst du 1 Münze werfen. Bei \"Kopf\" entferne alle Energiekarten von deinem Aktiven Pokémon und lege sie an Moorabbel an. Wenn du das machst, tausche Moorabbel mit diesem Aktiven Pokémon aus."
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
				en: "Mud Shot",
				fr: "Tir de boue",
				de: "Lehmschuss"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278758
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card
