import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Exeggutor",
		fr: "Noadkoko",
		de: "Kokowei"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [103],

	hp: 80,

	types: [
		"Psychic"
	],

	evolveFrom: {
		en: "Exeggcute",
		fr: "Noeunoeuf",
		de: "Owei"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Big Eggsplosion",
				fr: "Grosse éclate",
				de: "Große Eggsplosion"
			},
			effect: {
				en: "Flip a number of coins equal to the amount of Energy attached to Exeggutor. This attack does 20 damage times the number of heads.",
				fr: "Lancez un nombre de pièces équivalent au nombre d'Énergie attachées à Noadkoko. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				de: "Wirf so viele Münzen, wie Energie an Kokowei angelegt ist. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lateral Eggsplosion",
				fr: "Éclate latérale",
				de: "Seitliche Eggsplosion"
			},
			effect: {
				en: "Flip a number of coins equal to the amount of Energy attached to all of of your Benched Pokémon. This attack does 30 damage plus 10 more damage for each heads.",
				fr: "Lancez un nombre de pièces égal à la quantité d'Énergie attachée à tous les Pokémon de votre Banc. Cette attaque inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque face.",
				de: "Wirf so viele Münzen, wie Energie an alle Pokémon auf deiner Bank angelegt ist. Dieser Angriff fügt 30 Schadenspunkte plus 10 weitere Schadenspunkte pro geworfenem „Kopf“ zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 85356,
				cardmarket: 275084
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 85356,
				cardmarket: 275084
			}
		},
	]
}

export default card
