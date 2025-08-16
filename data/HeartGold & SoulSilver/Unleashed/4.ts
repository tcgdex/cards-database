import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Metagross",
		fr: "Metalosse",
		de: "Metagross"
	},

	illustrator: "Wataru Kawahara",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		376,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Metang",
		fr: "Metang",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Psychic Float",
				fr: "Psy-flotteur",
				de: "Psychoschweber"
			},
			effect: {
				en: "If you have any Psychic Energy attached to your Active Pokémon, the Retreat Cost for that Pokémon is 0.",
				fr: "Si une ou plusieurs cartes Énergie Psychic sont attachées à votre Pokémon Actif, le Coût de retraite de ce dernier est de 0.",
				de: "Wenn an dein Aktives Pokémon mindestens 1 -Energie angelegt ist, hat dieses Pokémon Rückzugskosten von 0."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pulse Blast",
				fr: "Explosion vibrante",
				de: "Pulsierender Schuss"
			},

			damage: 60,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Double Leg Hammer",
				fr: "Marteau têtu",
				de: "Doppelter Beinhammer"
			},
			effect: {
				en: "Choose 2 of your opponent’s Benched Pokémon. This attack does 40 damage to each of them. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 2 des Pokémon se trouvant sur le Banc de votre adversaire. Cette attaque inflige 40 dégâts à chacun d’entre eux. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				de: "Wähle 2 Pokémon auf der Bank deines Gegners. Dieser Angriff fügt jedem der gewählten Pokémon 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 4,

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279160,
		tcgplayer: 87340
	}
}

export default card
