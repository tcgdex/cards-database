import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Mudsdale",
		fr: "Bourrinos",
		es: "Mudsdale",
		it: "Mudsdale",
		pt: "Mudsdale"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Mud Stock",
			fr: "Plein de Boue",
			es: "Reserva de Lodo",
			it: "Fangoscorta",
			pt: "Estoque Lamacento"
		},

		effect: {
			en: "Attach a Basic Fighting Energy card from your discard pile to each of your Benched Pokémon.",
			fr: "Attachez une carte Énergie Fighting de base de votre pile de défausse à chacun de vos Pokémon de Banc.",
			es: "Une 1 carta de Energía Fighting Básica de tu pila de descartes a cada uno de tus Pokémon en Banca.",
			it: "Assegna a ciascuno dei Pokémon nella tua panchina una carta Energia base Fighting dalla tua pila degli scarti.",
			pt: "Ligue uma carta de Energia Fighting Básica da sua pilha de descarte a cada um dos seus Pokémon no Banco."
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "High Horsepower",
			fr: "Cavalerie Lourde",
			es: "Fuerza Equina",
			it: "Forza Equina",
			pt: "Potência Equina"
		},

		effect: {
			en: "This Pokémon also does 40 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 40 dégâts.",
			es: "Este Pokémon también se hace 40 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 40 danni a se stesso.",
			pt: "Este Pokémon também causa 40 pontos de dano a si mesmo."
		},

		damage: 140
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card