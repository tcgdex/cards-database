import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Hitmonlee",
		fr: "Kicklee",
		de: "Kicklee"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		106,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Stretch Kick",
				fr: "Allonge",
				de: "Streckkick"
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, choose 1 of them and this attack does 20 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Si votre adversaire a des Pokémon sur son Banc, choisissez l'un d'eux et cette attaque lui inflige 20 dégâts. (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.)",
				de: "Falls dein Gewgner irgendwelche Pokémon auf seiner Bank hat, wähle eines von ihnen. Dieser Angriff fügt ihm 20 Schadenspunkte zu (Schwäche und Resistenz für Pokémon auf der Bank nicht anwenden)"
			}

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "High Jump Kick",
				fr: "Pied Voltige",
				de: "Turmkick"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "S'il est pressé, ses jambes s'allongent progressivement. Il court alors très rapidement."
	},

	thirdParty: {
		cardmarket: 273868,
		tcgplayer: 44430
	},

	variants: [
		{
			type: "normal",
			foil: "galaxy"
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			foil: "galaxy"
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
