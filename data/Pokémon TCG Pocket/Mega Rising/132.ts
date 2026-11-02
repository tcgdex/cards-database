import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Krookodile",
		fr: "Crocorible"
	},

	illustrator: "Shiburingaru",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [553],
	hp: 160,
	types: ["Fighting"],

	evolveFrom: {
		en: "Krokorok",
		fr: "Escroco"
	},

	description: {
		en: "Its unique faculty of sight can detect small prey\nmore than 30 miles away, even in the midst of\na sandstorm."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Chomp Chomp Bite",
			fr: "Mangeouille Vorace"
		},

		damage: 90,
		cost: ["Fighting", "Fighting", "Colorless"],

		effect: {
			en: "Flip a coin until you get tails. For each heads, discard a random Energy from your opponent's Active Pokémon.",
			fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Pour chaque côté face, défaussez au hasard une Énergie du Pokémon Actif de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3,

	boosters: ["mega-gyarados"]
}

export default card