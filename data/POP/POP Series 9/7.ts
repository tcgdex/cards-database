import { Card } from '../../../interfaces'
import Set from '../POP Series 9'

const card: Card = {
	name: {
		en: "Croagunk",
		fr: "Cradopaud"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		453,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Knock Off",
				fr: "Sabotage"
			},
			effect: {
				en: "Flip a coin. If heads, choose 1 card from your opponent’s hand without looking and discard it.",
				fr: "Lancez une pièce. Si c'est face, choisissez sans regarder 1 carte de la main de votre adversaire et défaussez-la."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Nimble",
				fr: "Agilité"
			},
			effect: {
				en: "If you have Turtwig in play, remove from Croagunk the number of damage counters equal to the damage you did to the Defending Pokémon.",
				fr: "Si vous avez un Tortipouss en jeu, retirez à Cradopaud autant de marqueurs de dégât que vous avez infligé de dégâts au Pokémon Défenseur."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 2,

	description: {
		en: "Inflating its poison sacs, it makes an eerie blubbering sound for intimidation.",
		fr: "Il émet un gargouillis étrange en gonflant ses glandes de poison pour intimider l'ennemi."
	},

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 278558
	}
}

export default card
