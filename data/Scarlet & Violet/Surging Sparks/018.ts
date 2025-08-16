import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [128],
	set: Set,

	name: {
		en: "Paldean Tauros",
		fr: "Tauros de Paldea",
		es: "Tauros de Paldea",
		it: "Tauros di Paldea",
		pt: "Tauros de Paldea",
		de: "Paldea-Tauros"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Rear Kick",
			fr: "Ruade",
			es: "Patada Trasera",
			it: "Retrocalcio",
			pt: "Chute Traseiro",
			de: "Rückwärtskick"
		},

		damage: 30
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Spirited Tackle",
			fr: "Charge Impétueuse",
			es: "Placaje Vigoroso",
			it: "Vigorazione",
			pt: "Investida Vivaz",
			de: "Hitziger Tackle"
		},

		effect: {
			en: "If your opponent's Active Pokémon is a Stage 1 Pokémon, this attack does 90 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon de Niveau 1, cette attaque inflige 90 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon de Fase 1, este ataque hace 90 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon di Fase 1, questo attacco infligge 90 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon Estágio 1, este ataque causará 90 pontos de dano a mais.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Phase-1-Pokémon ist, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Taiga Kasai",

	thirdParty: {
		cardmarket: 794273
	}
}

export default card
