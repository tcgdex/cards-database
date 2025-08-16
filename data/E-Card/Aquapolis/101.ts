import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Pinsir",
		fr: "Scarabrute",
		de: "Pinsir"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		127,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],

			name: {
				en: "Horn Grab",
				fr: "Attrap'korne",
				de: "Horngrapscher"
			},

			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé. Si c'est pile, cette attaque ne fait rien.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähm, bei 'Zahl' hat dieser Angriff keine Auswirkungen."
			},

			damage: 20
		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],

			name: {
				en: "Super Slice",
				fr: "Super tranche",
				de: "Superschnippler"
			},

			effect: {
				en: "Flip 2 coins. If either of them is tails, this attack does nothing.",
				fr: "Lancez 2 pièces. Si vous obtenez un pile, cette attaque ne fait rien.",
				de: "Wirf 2 Münzen. Wenn mindestens eine von beiden Zahl zeigt, hat dieser Angriff keine Auswirkungen."
			},

			damage: 90
		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275176,
		tcgplayer: 88134
	}
}

export default card
