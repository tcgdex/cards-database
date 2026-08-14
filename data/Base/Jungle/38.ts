import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Lickitung",
		fr: "Excelangue",
		it: "Lickitung",
		de: "Schlurp"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		108,
	],

	hp: 90,

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
				en: "Tongue Wrap",
				fr: "Léchouille",
				it: "Lingua Avvolgente",
				de: "Zungenangriff"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				it: "Lancia una moneta. Se esce testa, il Pokémon Difensore è Paralizzato.",
				de: "Wirf eine Münze. Bei „Kopf“ ist das verteidigende Pokémon jetzt gelähmt."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Supersonic",
				fr: "Ultrason",
				it: "Supersonico",
				de: "Superschall"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				it: "Lancia una moneta. Se esce testa, il Pokémon Difensore è Confuso.",
				de: "Wirf eine Münze. Bei „Kopf“ ist das verteidigende Pokémon jetzt verwirrt."
			},

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
	retreat: 3,


	description: {
		en: "Its tongue can be extended like a chameleon's. It leaves a stinging sensation when it licks enemies.",
		fr: "Il peut projeter sa langue comme un caméléon. Tout contact avec elle provoque une irritation.",
		it: "La sua lingua può allungarsi come quella di un camaleonte. Quando lecca un nemico, gli provoca una sensazione pungente.",
		de: "Seine Zunge lässt sich ausziehen wie die eines Chamäleons. Es hinterläßt ein stechendes Gefühl, wenn es Feinde leckt."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273835,
				tcgplayer: 45141
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273835,
				tcgplayer: 45141
			}
		}
	],
}

export default card
