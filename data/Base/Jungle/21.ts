import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Kangaskhan",
		fr: "Kangourex",
		de: "Kangama",
		it: "Kangaskhan"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		115,
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
				en: "Fetch",
				fr: "Rapporte",
				de: "Apportieren",
				it: "Stratagemma"
			},
			effect: {
				en: "Draw a card.",
				fr: "Piochez une carte.",
				de: "Ziehe eine Karte.",
				it: "Pesca una carta."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Comet Punch",
				fr: "Poing comète",
				de: "Kometenhieb",
				it: "Cometa Pugno"
			},
			effect: {
				en: "Flip 4 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				de: "Wirf 4 Münzen. Dieser Angriff fügt jedesmal, wenn die Münze \"Kopf\" zeigt, 20 Schadenspunkte zu.",
				it: "Lancia 4 volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa."
			},
			damage: "20x",

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
		en: "The infant rarely ventures out of its mother's protective pouch until it is three years old.",
		fr: "Son enfant ne quitte la poche ventrale protectrice qu'à l'âge de 3 ans.",
		it: "Il cucciolo raramente si avventura fuori dal rassicurante marsupio della madre prima dei tre anni di età."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273802,
				tcgplayer: 106983
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273802,
				tcgplayer: 106983
			}
		}
	],
}

export default card
