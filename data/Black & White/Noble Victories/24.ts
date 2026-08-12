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
		de: "Mebrana"
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
				de: "Kanon"
			},
			effect: {
				en: "Does 30 damage times the number of your Pokémon that have the Round attack.",
				fr: "Inflige 30 dégâts multipliés par le nombre de vos Pokémon possédant l'attaque Chant Canon.",
				de: "Dieser Angriff fügt 30 Schadenspunkte für jedes deiner Pokémon zu, das Kanon beherrscht."
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
				de: "Schallwelle"
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

	description: {
		en: "It increases the power of its punches by vibrating the bumps on its fists. It can turn a boulder to rubble with one punch.",
		de: "Wenn es die Beulen an seinen Fäusten zum Schwingen bringt, kann es doppelt so fest zuschlagen und Felsen zertrümmern."
	},

	thirdParty: {
		cardmarket: 280147,
		tcgplayer: 89057
	}
}

export default card
