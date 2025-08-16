import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Boldore",
		fr: "Géolithe",
		es: "Boldore",
		it: "Boldore",
		pt: "Boldore",
		de: "Sedimantur"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		525,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Roggenrola",
		fr: "Nodulithe",
		es: "Roggenrola",
		it: "Roggenrola",
		pt: "Roggenrola",
		de: "Kiesling"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Core Heal",
				fr: "Soin Viscéral",
				es: "Cura Núcleo",
				it: "Nucleocura",
				pt: "Cura Fundamental",
				de: "Kernheiler"
			},
			effect: {
				en: "Discard a Fighting Energy attached to this Pokémon and heal 50 damage from it.",
				fr: "Défaussez une Énergie Fighting attachée à ce Pokémon et soignez 50 dégâts à ce Pokémon.",
				es: "Descarta 1 Energía Fighting unida a este Pokémon y cúrale 50 puntos de daño.",
				it: "Scarta un'Energia Fighting assegnata a questo Pokémon e curalo da 50 danni.",
				pt: "Descarte uma Energia Fighting ligada a este Pokémon e cure 50 de danos desse Pokémon.",
				de: "Lege 1 an dieses Pokémon angelegte Fighting-Energie auf deinen Ablagestapel und heile 50 Schadenspunkte bei diesem Pokémon."
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Power Gem",
				fr: "Rayon Gemme",
				es: "Joya de Luz",
				it: "Gemmoforza",
				pt: "Gema Poderosa",
				de: "Juwelenkraft"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 281855,
		tcgplayer: 94507
	}
}

export default card
