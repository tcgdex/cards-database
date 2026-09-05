import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Seismitoad",
		fr: "Crapustule",
		es: "Seismitoad",
		it: "Seismitoad",
		pt: "Seismitoad",
		de: "Branawarz"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		537,
	],

	hp: 140,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Palpitoad",
		fr: "Batracné",
		de: "Mebrana"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Echoed Voice",
				fr: "Écho",
				de: "Widerhall"
			},
			effect: {
				en: "During your next turn, this Pokémon's Echoed Voice attack does 50 more damage (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, l'attaque Écho de ce Pokémon inflige 50 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				de: "Während deines nächsten Zuges fügt die Attacke Widerhall dieses Pokémon 50 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 50,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Drain Punch",
				fr: "Vampipoing",
				de: "Ableithieb"
			},
			effect: {
				en: "Heal 20 damage from this Pokémon.",
				fr: "Soignez 20 dégâts à ce Pokémon.",
				de: "Heile 20 Schadenspunkte bei diesem Pokémon."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "They shoot paralyzing liquid from their head bumps. They use vibration to hurt their opponents.",
		de: "Es schießt eine lähmende Flüssigkeit aus den Beulen auf seinem Kopf. Es plagt seine Gegner mit Schallwellen."
	},

	thirdParty: {
		cardmarket: 280475,
		tcgplayer: 89058
	}
}

export default card
