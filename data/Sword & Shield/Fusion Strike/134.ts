import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [57],
	set: Set,

	name: {
		en: "Primeape",
		fr: "Colossinge",
		es: "Primeape",
		it: "Primeape",
		pt: "Primeape",
		de: "Rasaff"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		en: "Mankey",
		fr: "Férosinge",
		es: "Mankey",
		it: "Mankey",
		pt: "Mankey",
		de: "Menki"
	},

	stage: "Stage1",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Yuya Oka",

	description: {
		en: "The blood vessels in its brain are sturdier than those of other Pokémon, so it can stay healthy despite its constant raging."
	},

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Gut Punch",
			fr: "Poing Estomaquant",
			de: "Magenhieb",
			es: "Puño Tripa",
			pt: "Soco Tenaz",
			it: "Spavaldopugno"
		},

		damage: "30+",

		effect: {
			en: "If your opponent's Active Pokémon is a Pokémon V, this attack does 60 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-V, cette attaque inflige 60 dégâts supplémentaires.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-V ist, fügt diese Attacke 60 Schadenspunkte mehr zu.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon V, este ataque hace 60 puntos de daño más.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon V, este ataque causará 60 pontos de dano a mais.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon-V, questo attacco infligge 60 danni in più."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582712
	}
}

export default card