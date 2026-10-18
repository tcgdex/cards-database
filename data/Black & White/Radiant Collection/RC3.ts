import { Card } from '../../../interfaces'
import Set from '../Radiant Collection'

const card: Card = {
	name: {
		en: "Charmander",
		es: "Charmander",
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		4,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Playful",
				es: "Juguetón",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage times the number of damage counters on this Pokémon.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño por cada contador de daño en este Pokémon.",
			},

			damage: "20×",
		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "My Charmander is so rambunctious! I wonder if we can become good friends?",
		es: "¡Mi Charmander es tan travieso! ¿Podremos hacernos buenos amigos?",
	},

	thirdParty: {
		tcgplayer: 113744
	}
}

export default card
