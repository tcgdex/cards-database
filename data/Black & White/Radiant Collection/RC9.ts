import { Card } from '../../../interfaces'
import Set from '../Radiant Collection'

const card: Card = {
	name: {
		en: "Raichu",
		es: "Raichu",
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		26,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Pikachu",
		es: "Pikachu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Circle Circuit",
				es: "Circuito Circular",
			},
			effect: {
				en: "This attack does 20 damage times the number of your Benched Pokémon.",
				es: "Este ataque hace 20 puntos de daño por cada uno de tus Pokémon en Banca.",
			},

			damage: "20×",
		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunderbolt",
				es: "Rayo",
			},
			effect: {
				en: "Discard all Energy attached to this Pokémon.",
				es: "Descarta todas las Energías unidas a este Pokémon.",
			},

			damage: 100,
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		en: "The plan for today is to do nothing. My awesome tail is all curled up, and my ears are tired, too.",
		es: "El plan de hoy es no hacer nada. Mi increíble cola está descansando, y mis orejas están cansadas también.",
	},

	thirdParty: {
		tcgplayer: 113751
	}
}

export default card
