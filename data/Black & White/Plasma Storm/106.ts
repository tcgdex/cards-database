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
		de: "Flurmel"
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
				de: "Superschall"
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
				fr: "Le Pokémon Défenseur est maintenant Confus.",
				de: "Das Verteidigende Pokémon ist jetzt verwirrt."
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
				de: "Schallwelle"
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

	description: {
		en: "The shock waves from its cries can tip over trucks. It stamps its feet to power up.",
		de: "Die Schockwellen, die durch sein Rufen entstehen, können einen LKW umkippen."
	},

	thirdParty: {
		cardmarket: 280846,
		tcgplayer: 86845
	}
}

export default card
