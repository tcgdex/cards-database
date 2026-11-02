import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Remoraid",
		fr: "Rémoraid",
		de: "Remoraid"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	cameoDexIds: [226],

	dexId: [223],

	hp: 50,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Rain Splash",
				fr: "Pluie éclaboussante",
				de: "Regenplatscher"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Water Arrow",
				fr: "Flèche d’eau",
				de: "Wasserpfeil"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez l’un des Pokémon de votre adversaire. Cette attaque inflige 20 dégâts à ce Pokémon. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				de: "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "It has superb accuracy. The water it shoots out can strike even moving prey from more than 300 feet.",
		de: "Es ist äußerst präzise. Es kann mit seinem Wasserschuss Beute erlegen, die 100 Meter entfernt ist."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88699,
				cardmarket: 279215
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88699,
				cardmarket: 279215
			}
		},
	],

}

export default card
