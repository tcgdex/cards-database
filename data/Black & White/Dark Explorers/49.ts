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
		fr: "Ramoloss"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Psy Bolt",
				fr: "Choc Mental"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé."
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
				fr: "Pression des Mains"
			},
			effect: {
				en: "If you have more cards in your hand than your opponent, this attack does 30 more damage.",
				fr: "Si vous avez plus de cartes dans votre main que votre adversaire, cette attaque inflige 30 dégâts supplémentaires."
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

	thirdParty: {
		cardmarket: 280377,
		tcgplayer: 89320
	}
}

export default card
