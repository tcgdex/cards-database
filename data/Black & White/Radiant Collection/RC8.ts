import { Card } from '../../../interfaces'
import Set from '../Radiant Collection'

const card: Card = {
	name: {
		en: "Froslass",
		es: "Froslass",
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		478,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Snorunt",
		es: "Snorunt",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Drag Along",
				es: "Ven Conmigo",
			},
			effect: {
				en: "If this Pokémon is your Active Pokémon and is Knocked Out by damage from an opponent's attack, flip a coin. If heads, the Attacking Pokémon is Knocked Out.",
				es: "Si este Pokémon es tu Pokémon Activo y queda Fuera de Combate por el daño de un ataque de tu rival, lanza 1 moneda. Si sale cara, el Pokémon Atacante queda Fuera de Combate.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Snowy Drop",
				es: "Caída Nevada",
			},
			effect: {
				en: "Put 4 damage counters on your opponent's Pokémon in any way you like.",
				es: "Pon 4 contadores de daño en los Pokémon de tu rival de la manera que desees.",
			},
		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "Spring is already here, so goodbye…",
		es: "Ya llegó la primavera, así que adiós...",
	},

	thirdParty: {
		tcgplayer: 113750
	}
}

export default card
