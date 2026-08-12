import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Palpitoad",
		fr: "Batracné",
		es: "Palpitoad",
		it: "Palpitoad",
		pt: "Palpitoad",
		de: "Mebrana"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		536,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Tympole",
		fr: "Tritonde",
		de: "Schallquap"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Mud Shot",
				fr: "Tir de Boue",
				de: "Lehmschuss"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Round",
				fr: "Chant Canon",
				de: "Kanon"
			},
			effect: {
				en: "Does 20 damage times the number of your Pokémon that have the Round attack.",
				fr: "Inflige 20 dégâts multipliés par le nombre de vos Pokémon possédant l'attaque Chant Canon.",
				de: "Dieser Angriff fügt 20 Schadenspunkte für jedes deiner Pokémon zu, das Kanon beherrscht."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "It lives in water and on land. It uses its long, sticky tongue to capture prey.",
		de: "Es lebt zu Wasser und zu Lande. Mit seiner langen, klebrigen Zunge umklammert und fängt es seine Beute."
	},

	thirdParty: {
		cardmarket: 280146,
		tcgplayer: 87922
	}
}

export default card
