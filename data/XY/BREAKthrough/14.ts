import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Spewpa",
		fr: "Pérégrain",
	},
	illustrator: "Saya Tsuruta",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		665,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Scatterbug",
		fr: "Lépidonille",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Protect",
				fr: "Abri",
			},
			effect: {
				en: "Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, évitez tous les effets d'attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
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

	retreat: 2,



}

export default card
