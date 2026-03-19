import { Card } from '../../../interfaces'
import Set from '../POP Series 1'

const card: Card = {
	name: {
		en: "Rayquaza",
		fr: "Rayquaza"
	},

	illustrator: "Katsura Tabata",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		384,
	],

	hp: 80,

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
				en: "Fly",
				fr: "Vol"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing. If heads, prevent all effects of an attack, including damage, done to Rayquaza during your opponent’s next turn.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Rayquaza lors du prochain tour de votre adversaire."
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Lightning",
			],
			name: {
				en: "Dragon Claw",
				fr: "Griffe de dragon"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Colorless"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 277417,
		tcgplayer: 88624
	}
}

export default card
