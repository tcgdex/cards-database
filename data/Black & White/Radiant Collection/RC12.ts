import { Card } from '../../../interfaces'
import Set from '../Radiant Collection'

const card: Card = {
	name: {
		en: "Gulpin",
		es: "Gulpin",
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		316,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Starvin'",
				es: "Morirse de Hambre",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
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

	retreat: 2,

	description: {
		en: "When Mom gets in the kitchen, the happiest things happen. I can feel my mouth watering!",
		es: "Cuando mamá se mete en la cocina, ocurren cosas maravillosas. ¡Se me hace la boca agua!",
	},

	thirdParty: {
		tcgplayer: 113754
	}
}

export default card
