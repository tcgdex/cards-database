import { Card } from '../../../interfaces'
import Set from '../Radiant Collection'

const card: Card = {
	name: {
		en: "Pikachu",
		es: "Pikachu",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		25,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Nuzzle",
				es: "Moflete Estático",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			},
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Quick Attack",
				es: "Ataque Rápido",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 more damage.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 10 puntos de daño más.",
			},

			damage: "20+",
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

	retreat: 1,

	description: {
		en: "A yellow body is proof of good health. If you touch its bright-red cheeks, you'll see its shining, smiling face!",
		es: "Un cuerpo amarillo es señal de buena salud. Si tocas sus rojas y brillantes mejillas, ¡verás sus caras resplandecientes y sonrientes!",
	},

	thirdParty: {
		tcgplayer: 113771
	}
}

export default card
