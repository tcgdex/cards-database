import { Card } from '../../../interfaces'
import Set from '../POP Series 1'

const card: Card = {
	name: {
		en: "Larvitar",
		fr: "Embrylex",
		de: "Larvitar"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [246],

	hp: 40,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Sand Attack",
				fr: "Jet de sable",
				de: "Sandangriff"
			},
			effect: {
				en: "If the Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				fr: "Si le Pokémon Défenseur essaye d'attaquer lors du prochain tour de votre adversaire, votre adversaire lance une pièce. Si c'est pile, cette attaque est sans effet.",
				de: "Wenn das Verteidigende Pokémon im nächsten Zug angreift, wirft dein Gegner 1 Münze. Bei „Zahl“ hat der entsprechende Angriff keine Auswirkungen."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Water"
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86636,
				cardmarket: 277425
			},
		},
	],

}

export default card
