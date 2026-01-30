import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Latias ex",
		fr: "Latias ex",
		de: "Latias ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		380,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hypnoblast",
				fr: "Hypnoblast",
				de: "Hypnoschuss"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi.",
				de: "Wirf 1 Münze. Bei \"Kopf\" schläft das Verteidigende Pokémon jetzt."
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
			],
			name: {
				en: "Mist Ball",
				fr: "Boule de brume",
				de: "Nebelball"
			},
			effect: {
				en: "Discard a Fire Energy and a Water Energy attached to Latias ex.",
				fr: "Défaussez une Énergie  et une Énergie  attachée à Latias ex.",
				de: "Entferne 1 -Energie und 1 -Energie, die an Latias ex angelegt sind und lege sie auf deinen Ablagestapel."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
		{
			type: "Psychic",
			value: "-30"
		},
	],


	retreat: 2,

	thirdParty: {
		tcgplayer: 86659,
		cardmarket: 275970
	}
}

export default card
