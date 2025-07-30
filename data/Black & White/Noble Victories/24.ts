import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Seismitoad",
		fr: "Crapustule",
		es: "Seismitoad",
		it: "Seismitoad",
		pt: "Seismitoad",
		de: "Branawarz"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		537,
	],

	hp: 140,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Palpitoad",
		fr: "Batracné",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Round",
				fr: "Chant Canon",
			},
			effect: {
				en: "Does 30 damage times the number of your Pokémon that have the Round attack.",
				fr: "Inflige 30 dégâts multipliés par le nombre de vos Pokémon possédant l'attaque Chant Canon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Hyper Voice",
				fr: "Mégaphone",
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 280147,
		tcgplayer: 89057
	}
}

export default card
