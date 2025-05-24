import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [168],
	set: Set,

	name: {
		en: "Ariados",
		fr: "Migalos",
		es: "Ariados",
		it: "Ariados",
		pt: "Ariados",
		de: "Ariados"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Big Net",
			fr: "Grand Filet",
			es: "Gran Tela",
			it: "Gran Tela",
			pt: "Teia Grande",
			de: "Großes Netz"
		},

		effect: {
			en: "Your opponent's Active Evolution Pokémon's Retreat Cost is {C} more.",
			fr: "Le Coût de Retraite du Pokémon Évolutif Actif de votre adversaire est augmenté de {C}.",
			es: "El Coste de Retirada del Pokémon Evolución Activo de tu rival es de {C} más.",
			it: "Il costo di ritirata del Pokémon Evoluzione attivo del tuo avversario aumenta di {C}.",
			pt: "O custo de Recuo do Pokémon de Evolução Ativo do seu oponente é {C} a mais.",
			de: "Die Rückzugskosten des Aktiven Entwicklungs-Pokémon deines Gegners erhöhen sich um {C}."
		}
	}],

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "String Bind",
			fr: "Ficelage",
			es: "Hilo Atadura",
			it: "Filo Legatutto",
			pt: "Fio Aprisionante",
			de: "Fadenfessel"
		},

		effect: {
			en: "This attack does 30 more damage for each {C} in your opponent's Active Pokémon's Retreat Cost.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque {C} dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
			es: "Este ataque hace 30 puntos de daño más por cada {C} en el Coste de Retirada del Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 30 danni in più per ogni {C} nel costo di ritirata del Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada {C} no custo de Recuo do Pokémon Ativo do seu oponente.",
			de: "Diese Attacke fügt für jedes {C} in den Rückzugskosten des Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Anesaki Dynamic"
}

export default card