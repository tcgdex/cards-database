import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [218],
	set: Set,

	name: {
		en: "Slugma",
		fr: "Limagma",
		es: "Slugma",
		it: "Slugma",
		pt: "Slugma",
		de: "Schneckmag"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Roasting Heat",
			fr: "Rôtissoire",
			es: "Calor Abrasador",
			it: "Calore Rovente",
			pt: "Calor de Lascar",
			de: "Bratende Hitze"
		},

		effect: {
			en: "If your opponent's Active Pokémon is Burned, this attack does 40 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est Brûlé, cette attaque inflige 40 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival está Quemado, este ataque hace 40 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è bruciato, questo attacco infligge 40 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente estiver Queimado, este ataque causará 40 pontos de dano a mais.",
			de: "Wenn das Aktive Pokémon deines Gegners verbrannt ist, fügt diese Attacke 40 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	}
}

export default card