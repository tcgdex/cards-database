import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Jigglypuff",
		fr: "Rondoudou",
		de: "Pummeluff"
	},

	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		39,
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
				"Colorless",
			],
			name: {
				en: "Expand",
				fr: "Pousstoidla",
				de: "Ausdehnen"
			},
			effect: {
				en: "All damage done to Jigglypuff during your opponent's next turn is reduced by 10 (after applying Weakness and Resistance).",
				fr: "Tous les dégâts infligés à Rondoudou pendant le prochain tour de votre adversaire sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
				de: "Aller Schaden, der Pummeluff im nächsten Zug deines Gegners zugefügt wird, wird um 10 reduziert (nach Verrechnung von Schwäche und Resistenz)."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		en: "If puffs its body up like a balloon and sings a lullaby that makes all who hear it fall into a deep sleep.",
		fr: "Il gonfle son corps comme un ballon et chante une berceuse qui fait sombrer tous ceux qui l'entendent dans un profond sommeil.",
		de: "Es bläst seinen Körper wie einen Ballon auf und singt ein Schlaflied, das alle, die es hören, sofort einschlafen lässt."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274696,
				tcgplayer: 86311
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274696,
				tcgplayer: 86311
			}
		}
	]
}

export default card
