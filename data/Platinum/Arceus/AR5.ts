import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Arceus",
		de: "Arceus"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [493],

	hp: 80,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Ripple Swell",
				de: "Wellenschwall"
			},
			effect: {
				en: "If you have 6 Arceus in play and each of them is a different type, search your deck for up to 6 basic Energy cards. Attach each of those Energy cards to a different Pokémon you have in play. Shuffle your deck afterward.",
				de: "Wenn du 6 Arceus jeweils unterschiedlichen Typs im Spiel hast, durchsuche dein Deck nach bis zu 6 Basis-Energiekarten. Lege jede dieser Energiekarten an ein anderes deiner Pokémon im Spiel an. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sky Spear",
				de: "Himmelsspeer"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 80 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Remove all Energy cards attached to Arceus and put them in the Lost Zone.",
				de: "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 80 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) Entferne alle Energiekarten, die an Arceus angelegt sind, und lege sie ins Nirgendwo."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "It is said to have emerged from an egg in a place where there was nothing, then shaped the world.",
		de: "Man sagt, es sei im Nichts aus einem Ei geschlüpft und habe dann die Welt geformt."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 278861,
				tcgplayer: 83596
			}
		}
	]
}

export default card
