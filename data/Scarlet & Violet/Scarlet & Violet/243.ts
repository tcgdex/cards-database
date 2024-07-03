import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		en: "Spidops ex",
		fr: "Filentrappe-ex",
		es: "Spidops ex",
		it: "Spidops-ex",
		pt: "Spidops ex",
		de: "Spinsidias-ex"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 260,
	types: ["Grass"],

	evolveFrom: {
		en: "Tarountula"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Trap Territory",
			fr: "Territoire Piégé",
			es: "Territorio Trampa",
			it: "Territorio Trappola",
			pt: "Armadilha Territorial",
			de: "Fallenrevier"
		},

		effect: {
			en: "Your opponent's Active Pokémon's Retreat Cost is Colorless more.",
			fr: "Le Coût de Retraite du Pokémon Actif de votre adversaire est augmenté de Colorless.",
			es: "El Coste de Retirada del Pokémon Activo de tu rival es de Colorless más.",
			it: "Il costo di ritirata del Pokémon attivo del tuo avversario aumenta di Colorless.",
			pt: "O custo de Recuo do Pokémon Ativo do seu oponente é Colorless a mais.",
			de: "Die Rückzugskosten des Aktiven Pokémon deines Gegners erhöhen sich um Colorless."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Wire Hang",
			fr: "Attache Filaire",
			es: "Colgar de un Hilo",
			it: "Filoappiglio",
			pt: "Por Um Fio",
			de: "Drahthänger"
		},

		effect: {
			en: "This attack does 30 more damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
			es: "Este ataque hace 30 puntos de daño más por cada Colorless en el Coste de Retirada del Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 30 danni in più per ogni Colorless nel costo di ritirata del Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada Colorless no custo de Recuo do Pokémon Ativo do seu oponente.",
			de: "Diese Attacke fügt für jedes Colorless in den Rückzugskosten des Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	}
}

export default card