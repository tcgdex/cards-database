import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Slowking",
		fr: "Roigada",
		es: "Slowking",
		it: "Slowking",
		pt: "Slowking",
		de: "Laschoking"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		199,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Slowpoke",
		fr: "Ramoloss",
		de: "Flegmon"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Psy Bolt",
				fr: "Choc Mental",
				de: "Konfusion"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt paralysiert."
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hand Press",
				fr: "Pression des Mains",
				de: "Händedruck"
			},
			effect: {
				en: "If you have more cards in your hand than your opponent, this attack does 30 more damage.",
				fr: "Si vous avez plus de cartes dans votre main que votre adversaire, cette attaque inflige 30 dégâts supplémentaires.",
				de: "Wenn du mehr Karten auf der Hand hast als dein Gegner, fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "Being bitten by Shellder gave it intelligence comparable to that of award-winning scientists.",
		de: "Wird es von Muschas gebissen, wird es so intelligent, dass es sich mit Nobelpreisträgern messen kann."
	},

	thirdParty: {
		cardmarket: 280377,
		tcgplayer: 89320
	}
}

export default card
