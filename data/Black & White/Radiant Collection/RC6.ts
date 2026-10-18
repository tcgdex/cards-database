import { Card } from '../../../interfaces'
import Set from '../Radiant Collection'

const card: Card = {
	name: {
		en: "Flareon EX",
		es: "Flareon-EX",
	},

	illustrator: "Atsuko Nishida",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		136,
	],

	hp: 170,

	types: [
		"Fire",
	],

	stage: "Basic",

	suffix: "EX",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Flash Fire",
				es: "Absorber Fuego",
			},
			effect: {
				en: "Once during your turn (before your attack), you may move a Fire Energy from 1 of your Pokémon to this Pokémon.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes mover 1 Energía Fire de 1 de tus Pokémon a este Pokémon.",
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
				en: "Blaze Ball",
				es: "Bola Ascuas",
			},
			effect: {
				en: "This attack does 20 more damage for each Fire Energy attached to this Pokémon.",
				es: "Este ataque hace 20 puntos de daño más por cada Energía Fire unida a este Pokémon.",
			},

			damage: "50+",
		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		tcgplayer: 113747
	}
}

export default card
