import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Flying Pikachu",
		fr: "Pikachu volant",
		de: "Fliegendes Pikachu"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		25,
	],

	hp: 40,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Thundershock",
				fr: "Éclair",
				de: "Donnerschock"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei „Kopf“ ist das verteidigende Pokémon gelähmt."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fly",
				fr: "Vol",
				de: "Fliegen"
			},
			effect: {
				en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Flying Pikachu; if tails, this attack does nothing (not even damage).",
				fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, prévenez tous les effets d'attaques, y compris les dégâts, infligés à Pikachu volant ; si c'est pile, cette attaque ne fait rien (pas même de dégâts).",
				de: "Wirf eine Münze. Bei „Kopf“ verhindere während des nächsten gegnerischen Zuges alle Auswirkungen von Angriffen auf Fliegendes Pikachu (einschließlich der Schadenspunkte); bei „Zahl“ richtet dieser Angriff nichts aus (nicht einmal Schadenspunkte)."
			},
			damage: 30,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		en: "By learning how to fly, Pikachu overcame its weakness to Fighting Pokémon.",
		fr: "En apprenant à voler, Pikachu a surpassé sa faiblesse contre le Pokémon Combat.",
		de: "Indem es das Fliegen erlernte, bezwang Pikachu seine Schwäche gegenüber den Kampf-Pokémon."
	},

	variants: [
		{
			type: "normal",
			stamp: ["pikachu-tail"],
			thirdParty: {
				tcgplayer: 161749
			},
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85534
			},
		}
	]
}

export default card
