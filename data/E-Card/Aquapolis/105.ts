import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Remoraid",
		fr: "Rémoraid",
		de: "Remoraid"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		223,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Splatter",
				fr: "Crépitement",
				de: "Verspritzer"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 10 damage to that Pokémon. Don't apply Weakness and Resistance.",
				fr: "Choisissez un des Pokémon de votre adversaire en jeu. Cette attaque inflige 10 dégâts à ce Pokémon. N'appliquez ni la Faiblesse, ni la Résistance pour cette attaque.",
				de: "Wähle 1 der Pokémon deines Gegners im Spiel. Dieser Angriff fügt diesem Pokémon 10 Schadenspunkte zu. Wende Schwäche und Resistenz bei diesem Angriff nicht an."
			}

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275181
	}
}

export default card
