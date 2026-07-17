import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	description: {
		en: "When it heats up, its body temperature reaches about 1,500 degrees Fahrenheit. It lashes its body like a whip and launches itself at enemies.",
		de: "Wenn es Hitze erzeugt, beträgt seine Temperatur etwa 800 ºC. Es bewegt seinen Körper wie eine Peitsche, um dann den Gegner anzuspringen."
	},

	name: {
		en: "Centiskorch",
		fr: "Scolocendre",
		es: "Centiskorch",
		'es-mx': "Centiskorch",
		de: "Infernopod"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	dexId: [851],
	hp: 140,
	types: ["Fire"],

	evolveFrom: {
		en: "Sizzlipede"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Controlled Burn",
			de: "Brandrodung"
		},

		cost: ["Fire"],

		effect: {
			en: "Discard the top 2 cards from your opponent's deck",
			de: "Lege die obersten 2 Karten des Decks deines Gegners auf seinen Ablagestapel."
		}
	}, {
		name: {
			en: "Heat Tackle",
			de: "Hitze-Tackle"
		},

		cost: ["Fire", "Colorless", "Colorless", "Colorless"],

		damage: 160,

		effect: {
			en: "This Pokémon also does 30 damage to itself",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895798,
				tcgplayer: 704767
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895798,
				tcgplayer: 704767
			}
		},
	],
}

export default card
