import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Absol EX",
		fr: "Absol EX",
	},

	illustrator: "PLANETA",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		359,
	],

	hp: 170,

	types: [
		"Darkness",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Dark Fang",
				fr: "Croc Obscurité",
			},
			effect: {
				en: "Flip a coin. If heads, discard a random card from your opponent's hand.",
				fr: "Lancez une pièce. Si c'est face, défaussez au hasard une carte de la main de votre adversaire.",
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Dark Edge",
				fr: "Lame Obscurité"
			},
			effect: {
				en: "During your opponent's next turn, any damage done by attacks from the Defending Pokémon is reduced by 20 (before applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés par des attaques du Pokémon Défenseur sont réduits de 20 (avant application de la Faiblesse et de la Résistance)."
			},
			damage: 100,

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
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 289720
	}
}

export default card
