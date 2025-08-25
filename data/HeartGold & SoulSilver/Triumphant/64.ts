import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Illumise",
		fr: "Lumivole",
		de: "Illumise"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		314,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sweet Scent",
				fr: "Doux parfum",
				de: "Lockduft"
			},
			effect: {
				en: "Remove 3 damage counters from 1 of your Pokémon.",
				fr: "Retirez 3 marqueurs de dégât à l’un de vos Pokémon.",
				de: "Entferne 3 Schadensmarken von 1 deiner Pokémon."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Vulcan Beat",
				fr: "Vulcanatak",
				de: "Vulkanprügel"
			},
			effect: {
				en: "Flip a coin for each Volbeat you have in play. This attack does 30 damage times the number of heads.",
				fr: "Lancez une pièce pour chacun de vos Muciole en jeu. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf für jedes Volbeat, das du im Spiel hast, eine Münze. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30x",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Its fragrance attracts a swarm of Volbeat, so they draw over 200 patterns in the night sky."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279594,
		tcgplayer: 86268
	}
}

export default card
