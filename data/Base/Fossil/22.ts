import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Hitmonlee",
		fr: "Kicklee",
		it: "Hitmonlee",
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
				it: "Calcio-Salto",
				de: "Streckkick"
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, choose 1 of them and this attack does 20 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Si votre adversaire a des Pokémon sur son Banc, choisissez l'un d'eux et cette attaque lui inflige 20 dégâts. (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.)",
				it: "Se il tuo avversario ha dei Pokémon in Panchina, scegline uno e questo attacco gli infligge 20 danni (non applicare Debolezza e Resistenza ai Pokémon in Panchina).",
				de: "Falls dein Gegner irgendwelche Pokémon auf der Bank hat, wähle eines von ihnen. Dieser Angriff fügt ihm 20 Schadenspunkte zu. (Schwäche und Resistenz für Pokémon auf der Bank nicht anwenden.)"
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
				it: "Calcio Volante",
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
	retreat: 1,


	description: {
		en: "When in a hurry, its legs lengthen progressively. It runs smoothly with extra long, loping strides.",
		fr: "S'il est pressé, ses jambes s'allongent progressivement. Il court alors très rapidement.",
		it: "Quando ha fretta, le sue gambe si allungano sempre di più. Corre con agilità, a passi lunghi e cadenzati.",
		de: "Wenn dieses Pokémon es eilig hat, werden seine Beine immer länger. Es läuft ruhig mit extralangen, beschwingten Schritten."
	},


	variants: [
		{
			type: "normal",
			subtype: "1999-2000-copyright",
			thirdParty: {
				cardmarket: 273883,
				tcgplayer: 44430
			}
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273883,
				tcgplayer: 44430
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273883,
				tcgplayer: 44430
			}
		},
	],
}

export default card
