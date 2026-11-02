import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Mr. Mime",
		fr: "M. Mime",
		de: "Pantimos"
	},

	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		122,
	],

	hp: 70,

	types: [
		"Fairy",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Bench Barrier",
				fr: "Barrière de Banc",
				de: "Bankbarriere"
			},
			effect: {
				en: "Prevent all damage done to your Benched Pokémon by attacks.",
				fr: "Évitez tous les dégâts infligés à vos Pokémon de Banc par des attaques.",
				de: "Verhindere allen Schaden, der den Pokémon auf deiner Bank durch Angriffe zugefügt wird."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Juggling",
				fr: "Jonglerie",
				de: "Jongleur"
			},
			effect: {
				en: "Flip 4 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf 4 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "It is adept at conning people. It is said to be able to create walls out of thin air by miming.",
		de: "Es ist geschickt darin, Menschen zu beeinflussen. Man sagt, es könne dünne Wände aus Luft nur durch Mimen entstehen lassen."
	},

	thirdParty: {
		cardmarket: 288490,
		tcgplayer: 113710
	}
}

export default card
