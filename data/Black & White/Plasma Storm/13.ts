import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Amoonguss",
		fr: "Gaulet",
		es: "Amoonguss",
		it: "Amoonguss",
		pt: "Amoonguss",
		de: "Hutsassa"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		591,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Foongus",
		fr: "Trompignon",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Astonish",
				fr: "Étonnement",
			},
			effect: {
				en: "Flip a coin. If heads, choose 3 random cards from your opponent's hand. Your opponent reveals those cards and shuffles them into his or her deck.",
				fr: "Lancez une pièce. Si c'est face, choisissez 3 cartes au hasard de la main de votre adversaire. Votre adversaire montre les cartes choisies et les mélange avec son deck.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Miracle Powder",
				fr: "Poudre Miracle",
			},
			effect: {
				en: "Flip a coin. If heads, choose 1 Special Condition. The Defending Pokémon is now affected by that Special Condition.",
				fr: "Lancez une pièce. Si c'est face, choisissez 1 État Spécial. Le Pokémon Défenseur est maintenant affecté par l'État Spécial choisi.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 280753
	}
}

export default card
