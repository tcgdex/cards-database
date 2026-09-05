import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Zekrom",
		fr: "Zekrom",
		es: "Zekrom",
		it: "Zekrom",
		pt: "Zekrom",
		de: "Zekrom"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		644,
	],

	hp: 130,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Outrage",
				fr: "Colère",
				de: "Wutanfall"
			},
			effect: {
				en: "Does 10 more damage for each damage counter on this Pokémon.",
				fr: "Inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
				de: "Dieser Angriff fügt 10 weitere Schadenspunkte für jede Schadensmarke auf diesem Pokémon zu."
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Bolt Strike",
				fr: "ChargeFoudre",
				de: "Blitzschlag"
			},
			effect: {
				en: "This Pokémon does 40 damage to itself.",
				fr: "Ce Pokémon s’inflige 40 dégâts.",
				de: "Dieses Pokémon fügt sich selbst 40 Schadenspunkte zu."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "This Pokémon appears in legends. In its tail, it has a giant generator that creates electricity.",
		de: "Ein Pokémon, von dem schon in Sagen die Rede ist. Sein Schweif enthält ein gewaltiges Organ zur Stromerzeugung."
	},

	thirdParty: {
		cardmarket: 279785,
		tcgplayer: 90738
	}
}

export default card
