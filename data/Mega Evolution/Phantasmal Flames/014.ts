import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Moltres",
		fr: "Sulfura",
		es: "Moltres",
		'es-mx': "Moltres",
		de: "Lavados",
		it: "Moltres",
		pt: "Moltres"
	},

	rarity: "Rare",
	category: "Pokemon",

	dexId: [146],
	hp: 120,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Fighting Wings",
			fr: "Ailes Combatives",
			es: "Alas Luchadoras",
			'es-mx': "Alas Tenaces",
			de: "Kampfschwingen",
			it: "Ali Combattenti",
			pt: "Asas de Luta"
		},

		effect: {
			en: "If your opponent's Active Pokémon is a Pokémon ex, this attack does 90 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-ex, cette attaque inflige 90 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon ex, este ataque hace 90 puntos de daño más.",
			'es-mx': "Si el Pokémon Activo de tu rival es un Pokémon ex, este ataque hace 90 puntos de daño más.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-ex ist, fügt diese Attacke 90 Schadenspunkte mehr zu.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon-ex, questo attacco infligge 90 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon ex, este ataque causará 90 pontos de dano a mais."
		},

		damage: "20+"
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 857589
	}
}

export default card