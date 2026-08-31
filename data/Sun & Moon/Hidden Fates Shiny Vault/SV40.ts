import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Garchomp",
		fr: "Carchacrok",
		de: "Knakrack"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		445,
	],
	hp: 150,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Gabite",
		fr: "Carmache",
		de: "Knarksel"
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Quick Dive",
				fr: "Plongeon Rapide",
				de: "Schnelltaucher"
			},
			effect: {
				en: "This attack does 50 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 50 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				de: "Diese Attacke fügt 1 Pokémon deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Royal Blades",
				fr: "Lames Royales",
				de: "Königsklingen"
			},
			effect: {
				en: "If you played Cynthia from your hand during this turn, this attack does 100 more damage.",
				fr: "Si vous avez joué Cynthia de votre main pendant ce tour, cette attaque inflige 100 dégâts supplémentaires.",
				de: "Wenn du Cynthia während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke 100 Schadenspunkte mehr zu."
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],






	description: {
		en: "The protuberances on its head serve as sensors. It can even detect distant prey.",
		de: "Die beiden Fortsätze an seinem Kopf haben die Funktion eines Sensors. Mit ihnen kann es auch weit entfernte Beute aufspüren."
	},
}

export default card
