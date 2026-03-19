import { Card } from '../../../interfaces'
import Set from '../Dragon Vault'

const card: Card = {
	name: {
		en: "Kyurem",
		fr: "Kyurem"
	},

	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		646,
	],

	hp: 130,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon Claw",
				fr: "Dracogriffe"
			},

			damage: 60,

		},
		{
			cost: [
				"Water",
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Blizzard",
				fr: "Blizzard"
			},
			effect: {
				en: "Does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 281021,
		tcgplayer: 86563
	}
}

export default card
