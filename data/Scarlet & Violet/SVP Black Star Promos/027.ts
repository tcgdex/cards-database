import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		en: "Pikachu",
		fr: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		pt: "Pikachu",
		de: "Pikachu"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Lightning", "Lightning"],

		name: {
			en: "Adventuring Together",
			fr: "Aventure en Groupe",
			es: "Juntos de Aventura",
			it: "Avventure in Compagnia",
			pt: "Aventura em Grupo",
			de: "Gemeinsames Abenteuer"
		},

		effect: {
			en: "This attack does 10 more damage for each of your Benched Pokémon.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chacun de vos Pokémon de Banc.",
			es: "Este ataque hace 10 puntos de daño más por cada uno de tus Pokémon en Banca.",
			it: "Questo attacco infligge 10 danni in più per ogni Pokémon nella tua panchina.",
			pt: "Este ataque causa 10 pontos de dano a mais para cada um dos seus Pokémon no Banco.",
			de: "Diese Attacke fügt für jedes Pokémon auf deiner Bank 10 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}],

	retreat: 1,
	regulationMark: "G",
	illustrator: "Atsushi Furusawa"
}

export default card