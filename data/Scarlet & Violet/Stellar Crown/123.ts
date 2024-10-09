import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		en: "Talonflame",
		fr: "Flambusard",
		es: "Talonflame",
		it: "Talonflame",
		pt: "Talonflame",
		de: "Fiaro"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Aero Chase",
			fr: "Poursuite Aérienne",
			es: "Persecución Aérea",
			it: "Tallonamento Aereo",
			pt: "Caçada Aérea",
			de: "Aero-Jagd"
		},

		effect: {
			en: "If the Retreat Cost of your opponent's Active Pokémon is ColorlessColorless or more, this attack does 110 more damage.",
			fr: "Si le Coût de Retraite du Pokémon Actif de votre adversaire est de ColorlessColorless ou plus, cette attaque inflige 110 dégâts supplémentaires.",
			es: "Si el Coste de Retirada del Pokémon Activo de tu rival es de ColorlessColorless o más, este ataque hace 110 puntos de daño más.",
			it: "Se il costo di ritirata del Pokémon attivo del tuo avversario è ColorlessColorless o più, questo attacco infligge 110 danni in più.",
			pt: "Se o custo de Recuo do Pokémon Ativo do seu oponente for ColorlessColorless ou mais, este ataque causará 110 pontos de dano a mais.",
			de: "Wenn die Rückzugskosten des Aktiven Pokémon deines Gegners ColorlessColorless oder mehr betragen, fügt diese Attacke 110 Schadenspunkte mehr zu."
		},

		damage: "110+"
	}],

	retreat: 0,
	regulationMark: "H"
}

export default card