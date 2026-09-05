import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Magnezone",
		fr: "Magnézone",
		es: "Magnezone",
		it: "Magnezone",
		pt: "Magnezone",
		de: "Magnezone"
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		462,
	],

	hp: 140,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Magneton",
		fr: "Magnéton",
		de: "Magneton"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Double Assist",
				fr: "Double Assistance",
				de: "Doppelstütze"
			},
			effect: {
				en: "Attach 2 basic Energy cards from your discard pile to 1 of your Pokémon.",
				fr: "Attachez 2 cartes Énergie de base de votre pile de défausse à 1 de vos Pokémon.",
				de: "Lege 2 Basis-Energiekarten von deinem Ablagestapel an 1 deiner Pokémon an."
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tumbling Attack",
				fr: "Attaque Trébuchante",
				de: "Taumler"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 20 weitere Schadenspunkte zu."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "Sometimes the magnetism emitted by Magnezone is too strong, making them attract each other so they cannot move.",
		de: "Gelegentlich erzeugen sie so starke Magnetfelder, dass sie sich gegenseitig anziehen und einander immobilisieren."
	},

	thirdParty: {
		cardmarket: 280787,
		tcgplayer: 87119
	}
}

export default card
