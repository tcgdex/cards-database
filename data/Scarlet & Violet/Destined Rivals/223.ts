import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Spidops ex",
		fr: "Filentrappe-ex",
		de: "Spinsidias-ex",
		it: "Spidops-ex",
		es: "Spidops ex",
		pt: "Spidops ex"
	},

	illustrator: "takuyoa",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 260,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Trap Territory",
			fr: "Territoire Piégé",
			de: "Fallenrevier",
			it: "Territorio Trappola",
			es: "Territorio Trampa",
			pt: "Armadilha Territorial"
		},

		effect: {
			en: "Your opponent's Active Pokémon's Retreat Cost is {C} more.",
			fr: "Le Coût de Retraite du Pokémon Actif de votre adversaire est augmenté de {C}.",
			de: "Die Rückzugskosten des Aktiven Pokémon deines Gegners erhöhen sich um {C}.",
			it: "Il costo di ritirata del Pokémon attivo del tuo avversario aumenta di {C}.",
			es: "El Coste de Retirada del Pokémon Activo de tu rival es de {C} más.",
			pt: "O custo de Recuo do Pokémon Ativo do seu oponente é {C} a mais."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Wire Hang",
			fr: "Attache Filaire",
			de: "Drahthänger",
			it: "Filoappiglio",
			es: "Colgar de un Hilo",
			pt: "Por Um Fio"
		},

		effect: {
			en: "This attack does 30 more damage for each {C} in your opponent's Active Pokémon's Retreat Cost.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque {C} dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
			de: "Diese Attacke fügt für jedes {C} in den Rückzugskosten des Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu.",
			it: "Questo attacco infligge 30 danni in più per ogni {C} nel costo di ritirata del Pokémon attivo del tuo avversario.",
			es: "Este ataque hace 30 puntos de daño más por cada {C} en el Coste de Retirada del Pokémon Activo de tu rival.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada {C} no custo de Recuo do Pokémon Ativo do seu oponente."
		},

		damage: "90+"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card