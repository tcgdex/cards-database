import { Card } from '../../../interfaces'
import Set from '../Radiant Collection'

const card: Card = {
	name: {
		en: "Floette",
		es: "Floette",
	},

	illustrator: "Eske Yoshinob",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		670,
	],

	hp: 70,

	types: [
		"Fairy",
	],

	evolveFrom: {
		en: "Flabébé",
		es: "Flabébé",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Petal Blizzard",
				es: "Tormenta Floral",
			},
			effect: {
				en: "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				es: "Este ataque hace 10 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			},
		},
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Razor Leaf",
				es: "Hoja Afilada",
			},

			damage: 30,
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
		en: "The five of us team up to be the Pretty Young Girl Force! We'll show you some beautiful moves!",
		es: "¡Las cinco juntas formamos la Fuerza de las Bellas y Jóvenes Chicas! ¡Te enseñaremos bellos movimientos!",
	},

	thirdParty: {
		tcgplayer: 113760
	}
}

export default card
