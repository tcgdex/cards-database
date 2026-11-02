import { Card } from '../../../interfaces'
import Set from '../POP Series 9'

const card: Card = {
	name: {
		en: "Croagunk",
		fr: "Cradopaud",
		de: "Glibunkel"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [453],

	hp: 60,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Knock Off",
				fr: "Sabotage",
				de: "Abschlag"
			},
			effect: {
				en: "Flip a coin. If heads, choose 1 card from your opponent's hand without looking and discard it.",
				fr: "Lancez une pièce. Si c'est face, choisissez sans regarder 1 carte de la main de votre adversaire et défaussez-la.",
				de: "Wirf 1 Münze. Bei „Kopf“ wähle 1 Karte von der Hand deines Gegners (ohne sie vorher anzusehen) und lege sie auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Nimble",
				fr: "Agilité",
				de: "Beweglichkeit"
			},
			effect: {
				en: "If you have Turtwig in play, remove from Croagunk the number of damage counters equal to the damage you did to the Defending Pokémon.",
				fr: "Si vous avez un Tortipouss en jeu, retirez à Cradopaud autant de marqueurs de dégât que vous avez infligé de dégâts au Pokémon Défenseur.",
				de: "Wenn du Chelast im Spiel hast, entferne von Glibunkel Schadensmarken in der Höhe der Schadenspunkte, die dem Verteidigenden Pokémon zugefügt wurden."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],
	retreat: 2,

	description: {
		en: "Inflating its poison sacs, it makes an eerie blubbering sound for intimidation.",
		fr: "Il émet un gargouillis étrange en gonflant ses glandes de poison pour intimider l'ennemi.",
		de: "Wenn es seine giftigen Backen aufbläht, hört man ein unheimliches Geräusch, welches Gegner ängstigt."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84476,
				cardmarket: 278558
			},
		},
	],

}

export default card
