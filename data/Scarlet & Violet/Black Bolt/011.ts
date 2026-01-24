import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [591],
	set: Set,

	name: {
		en: "Amoonguss",
		fr: "Gaulet",
		de: "Hutsassa",
		it: "Amoonguss",
		pt: "Amoonguss",
		es: "Amoonguss",
		'es-mx': "Amoonguss"
	},

	illustrator: "Kurata So",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	evolveFrom: {
		en: "Foongus",
		fr: "Trompignon",
		de: "Tarnpignon",
		it: "Foongus",
		pt: "Foongus",
		es: "Foongus",
		'es-mx': "Foongus"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Dangerous Reaction",
			fr: "Réaction Dangereuse",
			de: "Gefährliche Reaktion",
			it: "Reazione Pericolosa",
			pt: "Reação Perigosa",
			es: "Reacción Peligrosa",
			'es-mx': "Reacción Peligrosa"
		},

		effect: {
			en: "If your opponent's Active Pokémon is affected by a Special Condition, this attack does 120 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, cette attaque inflige 120 dégâts supplémentaires.",
			de: "Wenn das Aktive Pokémon deines Gegners von einem Speziellen Zustand betroffen ist, fügt diese Attacke 120 Schadenspunkte mehr zu.",
			it: "Se il Pokémon attivo del tuo avversario è influenzato da una condizione speciale, questo attacco infligge 120 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente estiver afetado por uma Condição Especial, este ataque causará 120 pontos de dano a mais.",
			es: "Si el Pokémon Activo de tu rival se ve afectado por una Condición Especial, este ataque hace 120 puntos de daño más.",
			'es-mx': "Si el Pokémon Activo de tu rival se ve afectado por una Condición Especial, este ataque hace 120 puntos de daño más."
		},

		damage: "30+"
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Seed Bomb",
			fr: "Canon Graine",
			de: "Samenbomben",
			it: "Semebomba",
			pt: "Bomba de Sementes",
			es: "Bomba Germen",
			'es-mx': "Bomba Semilla"
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 835922
	}
}

export default card