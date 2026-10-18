import { Card } from '../../../interfaces'
import Set from '../Radiant Collection'

const card: Card = {
	name: {
		en: "Dedenne",
		es: "Dedenne",
	},

	illustrator: "kanahei",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		702,
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
				en: "Rest",
				es: "Descanso",
			},
			effect: {
				en: "Heal 30 damage from this Pokémon. This Pokémon is now Asleep.",
				es: "Cura 30 puntos de daño a este Pokémon. Este Pokémon pasa a estar Dormido.",
			},
		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Pachi",
				es: "Pachi",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			},

			damage: "10+",
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
		en: "Crackle…buzz…Dedenne…?! Beep…",
		es: "Crec... Zzz... ¡¿Dedenne?! Bip...",
	},

	thirdParty: {
		tcgplayer: 113752
	}
}

export default card
