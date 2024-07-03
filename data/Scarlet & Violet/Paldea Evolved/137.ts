import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [336],
	set: Set,

	name: {
		fr: "Séviper",
		en: "Seviper",
		es: "Seviper",
		it: "Seviper",
		pt: "Seviper",
		de: "Vipitis"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Croc Aiguisé",
			en: "Sharp Fang",
			es: "Colmillo Afilado",
			it: "Zannaffilata",
			pt: "Presa Afiada",
			de: "Scharfe Fänge"
		},

		damage: 20
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			fr: "Coupe Transversale",
			en: "Cross-Cut",
			es: "Atajar",
			it: "Fendente Incrociato",
			pt: "Corte em Cruz",
			de: "Überkreuzzerschneider"
		},

		effect: {
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 50 dégâts supplémentaires.",
			en: "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 50 more damage.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 50 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon Evoluzione, questo attacco infligge 50 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon de Evolução, este ataque causará 50 pontos de dano a mais.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Entwicklungs-Pokémon ist, fügt diese Attacke 50 Schadenspunkte mehr zu."
		},

		damage: "50+"
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card