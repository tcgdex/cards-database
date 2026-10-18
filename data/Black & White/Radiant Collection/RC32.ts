import { Card } from '../../../interfaces'
import Set from '../Radiant Collection'

const card: Card = {
	name: {
		en: "Sylveon EX",
		es: "Sylveon-EX",
	},

	illustrator: "Kanako Eo",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		700,
	],

	hp: 170,

	types: [
		"Fairy",
	],

	stage: "Basic",

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dress Up",
				es: "Arreglarse",
			},
			effect: {
				en: "If this Pokémon has a Pokémon Tool card attached to it, this attack does 30 more damage.",
				es: "Si este Pokémon tiene 1 carta de Herramienta Pokémon unida a él, este ataque hace 30 puntos de daño más.",
			},

			damage: "30+",
		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Precious Ribbon",
				es: "Cinta Preciosa",
			},
			effect: {
				en: "Move a Fairy Energy from this Pokémon to 1 of your Benched Pokémon. If you do, heal 50 damage from that Pokémon.",
				es: "Mueve 1 Energía Fairy de este Pokémon a 1 de tus Pokémon en Banca. Si lo haces, cura 50 puntos de daño a ese Pokémon.",
			},

			damage: 100,
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

	retreat: 2,

	thirdParty: {
		tcgplayer: 113764
	}
}

export default card
