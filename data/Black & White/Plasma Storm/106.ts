import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Loudred",
		fr: "Ramboum",
		es: "Loudred",
		it: "Loudred",
		pt: "Loudred",
		de: "Krakeelo"
	},

	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		294,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Whismur",
		fr: "Chuchmur",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Supersonic",
				fr: "Ultrason",
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
				fr: "Le Pokémon Défenseur est maintenant Confus.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hyper Voice",
				fr: "Mégaphone",
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 280846,
		tcgplayer: 86845
	}
}

export default card
