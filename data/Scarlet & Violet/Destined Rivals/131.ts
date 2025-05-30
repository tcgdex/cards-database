import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Marnie's Liepard",
		fr: "Léopardus de Rosemary",
		de: "Marys Kleoparda",
		it: "Liepard di Mary",
		es: "Liepard de Roxy",
		pt: "Liepard da Marine",
		'es-mx': "Liepard de Marnie"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Pointy Claws",
			fr: "Griffes Pointues",
			de: "Spitze Krallen",
			it: "Artigli Appuntiti",
			es: "Garras Puntiagudas",
			pt: "Garras Pontiagudas",
			'es-mx': "Garras Puntiagudas"
		},

		effect: {
			en: "If your opponent's Active Pokémon is a Pokémon ex, this attack does 70 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-ex, cette attaque inflige 70 dégâts supplémentaires.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-ex ist, fügt diese Attacke 70 Schadenspunkte mehr zu.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon-ex, questo attacco infligge 70 danni in più.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon ex, este ataque hace 70 puntos de daño más.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon ex, este ataque causará 70 pontos de dano a mais.",
			'es-mx': "Si el Pokémon Activo de tu rival es un Pokémon ex, este ataque hace 70 puntos de daño más."
		},

		damage: "70+"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card