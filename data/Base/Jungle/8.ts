import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Pidgeot",
		fr: "Roucarnage",
		it: "Pidgeot",
		de: "Tauboss"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		18,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Pidgeotto",
		fr: "Roucoups",
		it: "Pidgeotto",
		de: "Tauboga"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wing Attack",
				fr: "Cru-aile",
				it: "Attacco d'Ala",
				de: "Flügelschlag"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hurricane",
				fr: "Ouragan",
				it: "Uragano",
				de: "Hurrikan"
			},
			effect: {
				en: "Unless this attack Knocks Out the Defending Pokémon, return the Defending Pokémon and all cards attached to it to your opponent's hand.",
				fr: "À moins que cette attaque ne mette le Pokémon Défenseur K.O., renvoyez le Pokémon Défenseur et toutes les cartes qui lui sont attachées dans la main de votre adversaire.",
				it: "A meno che questo attacco metta K.O. il Pokémon Difensore, il tuo avversario riprende in mano il Pokémon Difensore e tutte le carte a esso assegnate.",
				de: "Falls dieser Angriff den verteidigenden Pokémon nicht kampfunfähig macht, gib den verteidigenden Pokémon und alle darauf abgelegten Karten deinem Gegners auf die Hand zurück."
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

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		en: "When hunting, it skims the surface of water at high speed to pick off unwary prey such as Magikarp.",
		fr: "Il chasse en surveillant la surface de l'eau et en plongeant pour attraper des proies faciles.",
		it: "Quando è a caccia, sfiora la superficie dell'acqua ad alta velocità per catturare prede incaute come Magikarp.",
		de: "Auf der Jagd fliegt es mit einer hohen Geschwindigkeit knapp über der Wasseroberfläche, um nichtsahnende Beute wie z.B. Karpador einzufangen."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 273805,
				tcgplayer: 45134
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273805,
				tcgplayer: 45134
			}
		},
		{
			type: "holo",
			subtype: "missing-expansion-symbol",
		}
	],
}

export default card
