import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [241],
	set: Set,

	name: {
		en: "Miltank",
		fr: "Écrémeuh",
		es: "Miltank",
		it: "Miltank",
		pt: "Miltank",
		de: "Miltank"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Lively Tackle",
			fr: "Charge Enjouée",
			es: "Placaje Animado",
			it: "Vispazione",
			pt: "Investida Animada",
			de: "Aufpäppelnder Tackle"
		},

		effect: {
			en: "If this Pokémon was healed during this turn, this attack does 90 more damage.",
			fr: "Si ce Pokémon a été soigné pendant ce tour, cette attaque inflige 90 dégâts supplémentaires.",
			es: "Si este Pokémon ha sido curado durante este turno, este ataque hace 90 puntos de daño más.",
			it: "Se questo Pokémon è stato curato durante questo turno, questo attacco infligge 90 danni in più.",
			pt: "Se este Pokémon tiver sido curado durante este turno, este ataque causará 90 pontos de dano a mais.",
			de: "Wenn dieses Pokémon während dieses Zuges geheilt wurde, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "60+"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card