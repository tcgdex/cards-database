import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Miltank",
		fr: "Écrémeuh"
	},

	illustrator: "Kouki Saitou",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		en: "Miltank produces highly nutritious milk, so it's\nbeen supporting the lives of people and other\nPokémon since ancient times.",
		fr: "Grâce à son lait très nutritif, Écrémeuh contribue depuis longtemps au bien-être des humains et des Pokémon."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Rolling Frenzy",
			fr: "Roulade Frénétique"
		},

		damage: 10,
		cost: ["Colorless"],

		effect: {
			en: "Until this Pokémon leaves the Active Spot, this Pokémon's Rolling Frenzy attack does +30 damage. This effect stacks.",
			fr: "Tant que ce Pokémon est sur le Poste Actif, son attaque Roulade Frénétique inflige + 30 dégâts. Cet effet est cumulable."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3
}

export default card