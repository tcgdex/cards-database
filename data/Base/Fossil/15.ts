import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Zapdos",
		fr: "Élector",
		de: "Zapdos"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		145,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Thunderstorm",
				fr: "Orage",
				de: "Thunderstorm"
			},
			effect: {
				en: "For each of your opponent's Benched Pokémon, flip a coin. If heads, this attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Then, Zapdos does 10 damage times the number of tails to itself.",
				fr: "Pour chacun des Pokémon du Banc de votre adversaire, lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts au Pokémon concerné. (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.) Ensuite, Élector s'inflige 10 dégâts pour chaque pile.",
				de: "For each of your opponent's Benched Pokémon, flip a coin. IF heads, this attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Then, Zapdos does 10 damage times the number of tails to itself."
			},
			damage: 40,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "L'oiseau légendaire de la foudre. Il surgit hors des nuages en lançant d'énormes éclairs."
	},

	thirdParty: {
		cardmarket: 273876,
		tcgplayer: 44424
	}
}

export default card
