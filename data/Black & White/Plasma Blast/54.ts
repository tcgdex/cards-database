import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Archeops",
		fr: "Aéroptéryx",
		es: "Archeops",
		it: "Archeops",
		pt: "Archeops",
		de: "Aeropteryx"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		567,
	],

	hp: 120,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Archen",
		fr: "Arkéapti",
		de: "Flapteryx"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Acrobatics",
				fr: "Acrobatie",
				de: "Akrobatik"
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 20 weitere Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Swift Dive",
				fr: "Vive Plongée",
				de: "Turbotaucher"
			},
			effect: {
				en: "If this Pokémon's remaining HP is 50 or less, this attack's base damage is 50.",
				fr: "S'il reste 50 PV ou moins à ce Pokémon, les dégâts de base de cette attaque sont de 50.",
				de: "Wenn dieses Pokémon 50 oder weniger verbliebene KP hat, beträgt der Grundschaden dieser Attacke 50 Schadenspunkte."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		en: "It runs better than it flies. It takes off into the sky by running at a speed of 25 mph.",
		de: "Zu Fuß ist es schneller als in der Luft. Es muss ein Tempo von 40 km/h erreichen, bevor es sich in die Lüfte aufschwingt."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 281075,
				tcgplayer: 83611
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 281075,
				tcgplayer: 83611
			}
		}
	]
}

export default card
