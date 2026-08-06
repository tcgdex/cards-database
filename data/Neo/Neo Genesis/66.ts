import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Marill",
		fr: "Marill",
		de: "Marill"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		183,
	],

	hp: 40,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Defense Curl",
				fr: "Boul'armure",
				de: "Einigler"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all damage done to Marill during your opponent's next turn. (Any other effects of attacks still happen.)",
				fr: "Lancez une pièce. Si c'est face, prévenez tous les dégâts infligés à Marill pendant le prochain tour de votre adversaire. (Tout autre effet ou attaque est toujours valide.)",
				de: "Wirf eine Münze. Verhindere bei „Kopf“ alle Schadenspunkte, die Marill während des nächsten gegnerischen Zuges zugefügt werden. (Alle anderen Auswirkungen von Angriffen finden immer noch statt.)"
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Bubble Bomb",
				fr: "Bulle bombe",
				de: "Blubbbombe"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, Marill does 10 damage to itself.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé. Si c'est pile, Marill s'inflige 10 dégâts.",
				de: "Wirf eine Münze. Bei „Kopf“ ist das verteidigende Pokémon jetzt gelähmt. Bei Zahl fügt sich Marill selbst 10 Schadenspunkte zu."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "The end of its tail serves as a buoy that keeps it from drowning, even in a vicious current.",
		fr: "L'extrémité de sa queue lui sert de bouée et lui évite de couler, même dans les courants les plus sournois.",
		de: "Das Ende seines Schweifs dient ihm als Boje, um sich über Wasser zu halten und vor dem Ertrinken zu retten, selbst in einer heimtückischen Strömung."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274466,
				tcgplayer: 87213
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274466,
				tcgplayer: 87213
			}
		}
	]
}

export default card
