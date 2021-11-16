import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Aipom",
		fr: "Capumain"
	},

	illustrator: "Hironobu Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		190,
	],

	hp: 40,

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
				en: "Pilfer",
				fr: "Chapardage"
			},
			effect: {
				en: "Shuffle Aipom and all cards attached to it into your deck. Flip a coin. If heads, shuffle a card from your discard pile into your deck.",
				fr: "Mélangez Capumain et toutes les cartes qui lui sont attachées dans votre deck. Lancez une pièce. Si c'est face, mélangez une carte de votre pile de défausse dans votre deck."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tail Rap",
				fr: "Frap'keu"
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces."
			},
			damage: "10×",

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

	description: {
		fr: "Sa queue est si puissante qu'il peut s'en servir pour attraper une branche d'arbre et se suspendre en l'air."
	}
}

export default card
