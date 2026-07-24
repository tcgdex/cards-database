import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Magnemite",
		fr: "Magby",
		de: "Magby"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [81],

	hp: 40,

	types: [
		"Metal"
	],

	stage: "Basic",

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],,
	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],,
	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Attract",
				fr: "Attrape-énergie",
				de: "Energieschnapper"
			},
			effect: {
				en: "Choose 1 of your opponent's Benched Pokémon and switch the Defending Pokémon with it.",
				fr: "Lancez une pièce. Si c'est face, ajoutez une carte Énergie de votre pile de défausse à votre main.",
				de: "Wirf eine Münze. Nimm bei 'Kopf' eine Basis-Energiekarte von deinem Ablagestapel auf deine Hand."
			},

		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87002,
				cardmarket: 274892
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
