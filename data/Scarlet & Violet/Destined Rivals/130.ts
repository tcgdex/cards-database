import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Marnie's Purrloin",
		fr: "Chacripan de Rosemary",
		de: "Marys Felilou",
		it: "Purrloin di Mary",
		es: "Purrloin de Roxy",
		pt: "Purrloin da Marine",
		'es-mx': "Purrloin de Marnie"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Pointy Nails",
			fr: "Ongles Pointus",
			de: "Spitze Nägel",
			it: "Unghie Appuntite",
			es: "Uñas Puntiagudas",
			pt: "Unhas Pontiagudas",
			'es-mx': "Uñas Puntiagudas"
		},

		effect: {
			en: "If your opponent's Active Pokémon is a Pokémon ex, this attack does 40 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-ex, cette attaque inflige 40 dégâts supplémentaires.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-ex ist, fügt diese Attacke 40 Schadenspunkte mehr zu.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon-ex, questo attacco infligge 40 danni in più.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon ex, este ataque hace 40 puntos de daño más.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon ex, este ataque causará 40 pontos de dano a mais.",
			'es-mx': "Si el Pokémon Activo de tu rival es un Pokémon ex, este ataque hace 40 puntos de daño más."
		},

		damage: "20+"
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		normal: true,
		reverse: true,
	},

	variants_detailed: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
