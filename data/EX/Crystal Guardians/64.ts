import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Squirtle",
		fr: "Carapuce",
		de: "Schiggy"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		7,
	],

	hp: 40,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Solid Shell",
				fr: "Coquille dure",
				de: "Solider Panzer"
			},
			effect: {
				en: "Any damage done to Squirtle by attacks is reduced by 10 (after applying Weakness and Resistance).",
				fr: "Tous dégâts infligés à Carapuce par des attaques sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
				de: "Jeder Schaden, der Schiggy durch Angriffe zugefügt wird, wird um 10 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bubblebeam",
				fr: "Bulle d'O",
				de: "Blubbstrahl"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 277144,
		tcgplayer: 89492
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
