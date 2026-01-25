import { Card } from '../../../interfaces'
import Set from '../POP Series 3'

const card: Card = {
	name: {
		en: "Plusle",
		fr: "Posipi"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		311,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Cheer Up",
				fr: "Courage !"
			},
			effect: {
				en: "Draw a card. If you have Minun in play, draw 2 cards instead.",
				fr: "Piochez une carte. Si vous avez Négapi en jeu, piochez 2 cartes à la place."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Positive Ion",
				fr: "Ion positif"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires."
			},
			damage: "20+",

		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Body Bolt",
				fr: "« Boulon corporel »"
			},
			effect: {
				en: "Choose 1 of your opponent’s Pokémon that has any Poké-Bodies. This attack does 30 damage to that Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire qui a un Poké-Body. Cette attaque inflige 30 dégâts à ce Pokémon. (N'appliquez pas la Faiblesse et la Résistance aux Pokémon de Banc.)"
			}

		},
	],

	weaknesses: [
		{
			type: "Fighting"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],

	retreat: 1,

	variants: {
		normal: true,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 277453,
		tcgplayer: 88167
	}
}

export default card
