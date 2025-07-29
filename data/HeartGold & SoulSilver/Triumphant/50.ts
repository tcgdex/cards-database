import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Tentacruel",
		fr: "Tentacruel",
		de: "Tentoxa"
	},

	illustrator: "Sachiko Adachi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		73,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Tentacool",
		fr: "Tentacool",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Tentavolve",
				fr: "Tentavolution",
				de: "Tentwickel"
			},
			effect: {
				en: "If Tentacruel evolved from Tentacool during this turn, the Defending Pokémon is now Paralyzed and Poisoned.",
				fr: "Si Tentacruel a évolué en Tentacool pendant ce tour, le Pokémon Défenseur est maintenant Paralysé et Empoisonné.",
				de: "Wenn sich Tentoxa in diesem Zug aus Tentacha entwickelt hat, ist das Verteidigende Pokémon jetzt gelähmt und vergiftet."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hyper Beam",
				fr: "Ultralaser",
				de: "Hyperstrahl"
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.",
				fr: "Lancez une pièce. Si c’est face, défaussez une carte Énergie attachée au Pokémon Défenseur.",
				de: "Wirf eine Münze. Lege bei \"Kopf\" eine Energiekarte, die am Verteidigenden Pokémon angelegt ist, auf den Ablagestapel deines Gegners."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "In battle, it extends all 80 of its tentacles to entrap its opponent inside a poisonous net."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279580
	}
}

export default card
