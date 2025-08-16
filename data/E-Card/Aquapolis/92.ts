import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Mankey",
		fr: "Férosinge",
		de: "Menki"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		56,
	],

	hp: 40,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Mug",
				fr: "Agression",
				de: "Ausrauben"
			},
			effect: {
				en: "Before doing damage, discard all Trainer cards attached to the Defending Pokémon.",
				fr: "Avant d'infliger les dégâts, défaussez toutes les cartes Dresseur attachées au Pokémon Défenseur.",
				de: "Lege alle Trainerkarten, die an das Verteidigende Pokémon angelegt sind, auf den Ablagestapel deines Gegners, bevor der Schaden zugefügt wird."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rage",
				fr: "Frénésie",
				de: "Raserei"
			},
			effect: {
				en: "This attack does 10 damage plus 10 more damage for each damage counter on Mankey.",
				fr: "Cette attaque inflige 10 dégâts plus 10 dégâts pour chaque marqueur de dégâts sur Férosinge.",
				de: "Dieser Angriff fügt 10 Schadenspunkte plus zusätzliche 10 Schadenspunkte für jede Schadensmarke auf Menki zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275166,
		tcgplayer: 87172
	}
}

export default card
