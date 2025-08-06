import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Gambex",
		en: "Lokix",
		es: "Lokix",
		it: "Lokix",
		pt: "Lokix",
		de: "Lextremo"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			fr: "Coup Assaillant",
			en: "Assaulting Kick",
			es: "Patada de Asalto",
			it: "Calcio d'Assalto",
			pt: "Chute Ofensivo",
			de: "Überfallkick"
		},

		effect: {
			fr: "Si ce Pokémon a évolué de Lilliterelle pendant ce tour, cette attaque inflige 100 dégâts supplémentaires.",
			en: "If this Pokémon evolved from Nymble during this turn, this attack does 100 more damage.",
			es: "Si este Pokémon ha evolucionado de Nymble durante este turno, este ataque hace 100 puntos de daño más.",
			it: "Se questo Pokémon si è evoluto da Nymble durante questo turno, questo attacco infligge 100 danni in più.",
			pt: "Se este Pokémon evoluiu de Nymble durante este turno, este ataque causará 100 pontos de dano a mais.",
			de: "Wenn sich dieses Pokémon während dieses Zuges aus Micrick entwickelt hat, fügt diese Attacke 100 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			fr: "Attaque Rapide",
			en: "Speed Attack",
			es: "Ataque Fugaz",
			it: "Attacco Veloce",
			pt: "Ataque em Velocidade",
			de: "Tempoangriff"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		normal: false
	},

	illustrator: "Anesaki Dynamic",

	thirdParty: {
		cardmarket: 715494
	}
}

export default card
