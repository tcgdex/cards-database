import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [807],
	set: Set,

	name: {
		en: "Zeraora",
		fr: "Zeraora",
		es: "Zeraora",
		it: "Zeraora",
		pt: "Zeraora",
		de: "Zeraora"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Battle Claw",
			fr: "Griffe de Combat",
			es: "Garra Combativa",
			it: "Artiglio Lotta",
			pt: "Garra de Batalha",
			de: "Kampfkralle"
		},

		effect: {
			en: "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 30 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 30 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 30 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon Evoluzione, questo attacco infligge 30 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon de Evolução, este ataque causará 30 pontos de dano a mais.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Entwicklungs-Pokémon ist, fügt diese Attacke 30 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			en: "Mach Bolt",
			fr: "Éclair Fulgurant",
			es: "Rayo Mach",
			it: "Fulmine Mach",
			pt: "Raio Supersônico",
			de: "Flotter Sprung"
		},

		damage: 80
	}],

	retreat: 0,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card