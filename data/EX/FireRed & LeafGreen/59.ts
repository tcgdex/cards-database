import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Clefairy",
		fr: "Mélofée",
		de: "Piepi"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		35,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Gesture",
				fr: "Geste",
				de: "Geste"
			},
			effect: {
				en: "Choose 1 of your opponent's Benched Pokémon and switch it with the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch.",
				fr: "Choisissez un des Pokémon du Banc de votre adversaire et échangez-le avec le Pokémon Défenseur. Votre adversaire choisit le Pokémon Défenseur à échanger.",
				de: "Tausche 1 Verteidigendes Pokémon gegen 1 der Pokémon auf der Bank deines Geners aus. Dein Gegner wählt aus, welches Verteidigende Pokémon getauscht wird."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Moon Kick",
				fr: "Coup d'pied lunaire",
				de: "Mondkick"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276235,
		tcgplayer: 84354
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
