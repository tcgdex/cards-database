import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Iron Treads",
		fr: "Roue-de-Fer",
		es: "Ferrodada",
		it: "Solcoferreo",
		pt: "Trilho Férreo"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Dual Core",
			fr: "Double Cœur",
			es: "Doble Núcleo",
			it: "Dual Core",
			pt: "Dual Core"
		},

		effect: {
			en: "As long as this Pokémon has a Future Booster Energy Capsule attached, it is Fighting and Metal type.",
			fr: "Tant qu'une Capsule Énergie Booster Temps Futur est attachée à ce Pokémon, il est de type Fighting et Metal.",
			es: "Mientras este Pokémon tenga un Tanque de Energía Potenciadora del Futuro unido, es de tipo Fighting y Metal.",
			it: "Fintanto che questo Pokémon ha una Capsula energetica Tempo Futuro assegnata, è di tipo Fighting e Metal.",
			pt: "Enquanto este Pokémon tiver uma Cápsula Energética de Melhoria Futurista ligada a ele, será de tipo Fighting e Metal."
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			en: "Wheel Pass",
			fr: "Déplacement sur Roue",
			es: "Pase Rodante",
			it: "Traslaruota",
			pt: "Passe de Roda"
		},

		effect: {
			en: "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
			fr: "Déplacez une Énergie de ce Pokémon vers l'un de vos Pokémon de Banc.",
			es: "Mueve 1 Energía de este Pokémon a uno de tus Pokémon en Banca.",
			it: "Sposta un'Energia da questo Pokémon a uno di quelli nella tua panchina.",
			pt: "Mova uma Energia deste Pokémon para 1 dos seus Pokémon no Banco."
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card