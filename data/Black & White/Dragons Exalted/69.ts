import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Sawk",
		fr: "Karaclée",
		es: "Sawk",
		it: "Sawk",
		pt: "Sawk",
		de: "Karadonis"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		539,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Defensive Stance",
				fr: "Posture Défensive",
				de: "Trutzposten"
			},
			effect: {
				en: "Heal 30 damage from this Pokémon. Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon. Échangez ce Pokémon avec 1 de vos Pokémon de Banc.",
				de: "Heile 30 Schadenspunkte bei diesem Pokémon. Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Karate Chop",
				fr: "Poing-Karaté",
				de: "Karateschlag"
			},
			effect: {
				en: "Does 70 damage minus 10 damage for each damage counter on this Pokémon.",
				fr: "Inflige 70 dégâts moins 10 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon.",
				de: "Dieser Angriff fügt 70 Schadenspunkte minus 10 Schadenspunkte für jede Schadensmarke auf diesem Pokémon zu."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Tying their belts gets them pumped and makes their punches more destructive. Disturbing their training angers them.",
		de: "Zieht es den Gürtel fest, werden seine Hiebe stärker. Kann es gar nicht leiden, wenn man es beim Training stört."
	},

	thirdParty: {
		cardmarket: 280508,
		tcgplayer: 88939
	}
}

export default card
