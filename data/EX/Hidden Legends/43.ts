import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Metang",
		fr: "Metang",
		de: "Metang"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		375,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Beldum",
		fr: "Terhal"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psyshock",
				fr: "Choc psy",
				de: "Psyshock"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
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
				en: "Metal Ball",
				fr: "Boule métallique",
				de: "Metal Ball"
			},
			effect: {
				en: "Put 5 damage counters on the Defending Pokémon.",
				fr: "Placez 5 marqueurs de dégât sur le Pokémon Défenseur.",
				de: "Put 5 damage counters on the Defending Pokémon."
			},

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
		cardmarket: 276095,
		tcgplayer: 87372
	},

	variants: [
		{
			type: "normal",
		}, {
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
