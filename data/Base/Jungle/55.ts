import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Mankey",
		fr: "Férosinge",
		de: "Menki"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		56,
	],

	hp: 30,

	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Peek",
				fr: "Coup d'œil",
				de: "Blick"
			},
			effect: {
				en: "Once during your turn (before your attack), you may look at one of the following: the top card of either player's deck, a random card from your opponent's hand, or one of either player's Prizes. This power can't be used if Mankey is Asleep, Confused, or Paralyzed.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez regarder au choix: la carte du dessus du deck d'un des joueurs, une carte au hasard de la main de votre adversaire, ou une des Récompenses d'un des joueurs. Ce pouvoir ne peut être utilisé si Férosinge est Endormi, Confus ou Paralysé.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du dir eine der folgenden Karten anschauen: die oberste Karte vom Deck eines Spielers, eine Zufällige Karte von der hand deines Gegners oder einen der Preise eines Spielers. Diese Fähigkeit kann nicht eingesetzt werden, falls Menki schlafend, verwirrt oder gelähmt ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
				de: "Kratzer"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Il se met en colère très vite. Calme ou furieux, son humeur change d'une seconde à l'autre."
	},

	thirdParty: {
		cardmarket: 273852,
		tcgplayer: 45158
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	],
}

export default card
