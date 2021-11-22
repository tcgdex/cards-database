import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Exeggutor",
		fr: "Noadkoko"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		103,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Exeggcute",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Teleport",
				fr: "Téléport"
			},
			effect: {
				en: "Switch Exeggutor with 1 of your Benched Pokémon.",
				fr: "Échangez Noadkoko avec 1 des Pokémon de votre Banc."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Big Eggsplosion",
				fr: "Grosse éclate"
			},
			effect: {
				en: "Flip a number of coins equal to the number of Energy attached to Exeggutor. This attack does 20 damage times the number of heads.",
				fr: "Lancez un nombre de pièces égal au nombre d'Énergies attachées à Noadkoko. Cette attaque inflige 20 dégâts multipliés par le nombre de faces."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	description: {
		fr: "On raconte que si une de ses têtes se détache, elle se transforme en un Nœunœuf."
	}
}

export default card
