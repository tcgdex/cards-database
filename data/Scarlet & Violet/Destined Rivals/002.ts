import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Heracross",
		fr: "Scarhino",
		de: "Skaraborn",
		it: "Heracross",
		es: "Heracross",
		pt: "Heracross"
	},

	illustrator: "Taira Akitsu",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Superpowered Throw",
			fr: "Lancer Surpuissant",
			de: "Superstarker Wurf",
			it: "Lancio Superpotenziato",
			es: "Lanzamiento Superpoderoso",
			pt: "Jogada Superpoderosa"
		},

		effect: {
			en: "This attack does 30 more damage for each {C} in your opponent's Active Pokémon's Retreat Cost.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque {C} dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
			de: "Diese Attacke fügt für jedes {C} in den Rückzugskosten des Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu.",
			it: "Questo attacco infligge 30 danni in più per ogni {C} nel costo di ritirata del Pokémon attivo del tuo avversario.",
			es: "Este ataque hace 30 puntos de daño más por cada {C} en el Coste de Retirada del Pokémon Activo de tu rival.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada {C} no custo de Recuo do Pokémon Ativo do seu oponente."
		},

		damage: "10+"
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Horn Attack",
			fr: "Koud'Korne",
			de: "Hornattacke",
			it: "Incornata",
			es: "Cornada",
			pt: "Ataque de Chifre"
		},

		damage: 90
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card