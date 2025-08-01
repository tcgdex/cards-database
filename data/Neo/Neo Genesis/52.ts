import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Xatu",
		fr: "Xatu",
		de: "Xatu"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		178,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Natu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Prophecy",
				fr: "Prophétie",
				de: "Prophecy"
			},
			effect: {
				en: "Look at the top 3 cards of either player's deck and rearrange them as you like.",
				fr: "Regardez les 3 cartes du dessus du deck de n'importe quel joueur et ordonnez-les comme bon vous semble.",
				de: "Look at the top 3 cards of either player's deck and rearrange them as you like."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Confuse Ray",
				fr: "Onde folie",
				de: "Confuse Ray"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Confused."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "On dit qu'il reste silencieux et immobile car il observe le passé et le futur en même temps."
	},

	thirdParty: {
		cardmarket: 274452,
		tcgplayer: 90661
	}
}

export default card
