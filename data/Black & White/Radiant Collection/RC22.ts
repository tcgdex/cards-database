import { Card } from '../../../interfaces'
import Set from '../Radiant Collection'

const card: Card = {
	name: {
		en: "Diancie",
		es: "Diancie",
	},

	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		719,
	],

	hp: 90,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Sparkle",
				es: "Brillo",
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				es: "Si el Pokémon Defensor intenta atacar durante el próximo turno de tu rival, este lanza 1 moneda. Si sale cruz, ese ataque no hace nada.",
			},
		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Diamond Storm",
				es: "Tormenta de Diamantes",
			},
			effect: {
				en: "Heal 30 damage from each of your Fairy Pokémon.",
				es: "Cura 30 puntos de daño a cada uno de tus Pokémon Fairy.",
			},

			damage: 60,
		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "Open the magic door and a dream-colored party will start again today. I'll teach you the secret password.",
		es: "Abre la puerta mágica, y una fiesta de color de ensueño volverá a empezar hoy. Te enseñaré la clave secreta.",
	},

	thirdParty: {
		tcgplayer: 113765
	}
}

export default card
