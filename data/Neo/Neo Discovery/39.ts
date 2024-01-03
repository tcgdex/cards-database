import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Houndour",
		fr: "Malosse",
		de: "Hunduster"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		228,
	],

	hp: 40,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
				de: "Biss"
			},

			damage: 10,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Plunder",
				fr: "Pillage",
				de: "Plündern"
			},
			effect: {
				en: "Before doing damage, discard all Trainer cards attached to the Defending Pokémon.",
				fr: "Avant d'infliger les dégâts, défaussez toutes les cartes Dresseur attachées au Pokémon Défenseur (avant qu'elles agissent sur les dégâts).",
				de: "Lege alle Trainerkarten, die an das verteidigende Pokémon angelegt sind, auf den Ablagestapel deines gegners, bevor der Schaden zugefügt wird (bevor sie den Schaden beeinflussen können)."
			},
			damage: 20,

		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	description: {
		fr: "Il utilise différents types d'aboiements pour communiquer avec les autres de son espèce et pour chasser sa proie."
	}
}

export default card
