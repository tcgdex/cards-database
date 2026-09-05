import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Zapdos",
		fr: "Électhor",
		de: "Zapdos"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		145,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Lightning Burn",
				fr: "Brûlure éclair",
				de: "Blitzbrand"
			},
			effect: {
				en: "Flip a coin. If heads, and if your opponent has any Benched Pokémon, choose 1 of them. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) If tails, Zapdos does 30 damage to itself.",
				fr: "Lancez une pièce. Si c'est face, choisissez un des Pokémon du Banc de votre adversaire. Cette attaque inflige 30 dégâts à ce Pokémon. (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.) Si c'est pile, Électhor s'inflige 30 dégâts.",
				de: "Wirf eine Münze. Wähle bei „Kopf“ ein Pokémon auf der Bank deines Gegners. Dieser Angriff fügt diesem Pokémon 30 Schadenspunkte zu. (Schwäche und Resistenz für Pokémon auf der Bank nicht anwenden.) Bei „Zahl“ fügt sich Zapdos selbst 30 Schadenspunkte zu."
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
		en: "This legendary Pokémon is said to be present wherever there is a lightning storm.",
		fr: "Ce Pokémon légendaire est connu pour se montrer partout où il y a un orage.",
		de: "Diesem legendäres Pokémon wird nachgesagt, dass es immer bei Gewittern erscheint."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90713
			},
		},
		{
			type: "normal",
			subtype: "aoki-error"
		}
	]
}

export default card
