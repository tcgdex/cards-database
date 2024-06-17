import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [214],
	set: Set,

	name: {
		en: "Heracross",
		fr: "Scarhino",
		es: "Heracross",
		it: "Heracross",
		pt: "Heracross",
		de: "Skaraborn"
	},

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
			es: "Lanzamiento Superpoderoso",
			it: "Lancio Superpotenziato",
			pt: "Jogada Superpoderosa",
			de: "Superstarker Wurf"
		},

		effect: {
			en: "This attack does 30 more damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
			es: "Este ataque hace 30 puntos de daño más por cada Colorless en el Coste de Retirada del Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 30 danni in più per ogni Colorless nel costo di ritirata del Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada Colorless no custo de Recuo do Pokémon Ativo do seu oponente.",
			de: "Diese Attacke fügt für jedes Colorless in den Rückzugskosten des Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Horn Attack",
			fr: "Koud'Korne",
			es: "Cornada",
			it: "Incornata",
			pt: "Ataque de Chifre",
			de: "Hornattacke"
		},

		damage: 90
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card