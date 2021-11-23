import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Magmortar",
		fr: "Maganon"
	},

	illustrator: "Hiroaki Ito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		467,
	],

	hp: 100,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Magmar",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Smoke Bomb",
				fr: "Bombe fumante"
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin.  If tails, that attack does nothing.",
				fr: "Si le Pokémon Défenseur essaye d'attaquer lors du prochain tour de votre adversaire, celui-ci lance une pièce. Si c'est pile, cette attaque est sans effet."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flame Drum",
				fr: "Feu roulant"
			},
			effect: {
				en: "If Magby isn't anywhere under Magmortar, discard 2 Energy cards from your hand. (If you can't discard 2 Energy cards from your hand, this attack does nothing.)",
				fr: "Si Magby ne se trouve pas sous Maganon, défaussez 2 cartes Énergies de votre main. (Si vous ne pouvez pas défausser 2 cartes Énergie de votre main, cette est sans effet.)"
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+30"
		},
	],

	description: {
		fr: "Il projette des boules de feu de 2000°C à bout de bras. Il vit dans les cratères volcaniques."
	}
}

export default card
