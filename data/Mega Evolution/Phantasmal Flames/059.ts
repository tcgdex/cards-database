import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Sableye",
		fr: "Ténéfix",
		es: "Sableye",
		'es-mx': "Sableye",
		de: "Zobiris",
		it: "Sableye",
		pt: "Sableye"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	stage: "Basic",
	dexId: [302],

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Cocky Claw",
			fr: "Griffe Arrogante",
			es: "Garra Altiva",
			'es-mx': "Garra Altanera",
			de: "Großspurige Klaue",
			it: "Spocchiartiglio",
			pt: "Garra da Marra"
		},

		effect: {
			en: "If you have any Stage 2 {D} Pokémon on your Bench, this attack does 70 more damage.",
			fr: "Si vous avez au moins un Pokémon {D} de Niveau 2 sur votre Banc, cette attaque inflige 70 dégâts supplémentaires.",
			es: "Si tienes algún Pokémon {D} de Fase 2 en tu Banca, este ataque hace 70 puntos de daño más.",
			'es-mx': "Si tienes algún Pokémon {D} de Fase 2 en tu Banca, este ataque hace 70 puntos de daño más.",
			de: "Wenn du mindestens 1 Phase-2-{D}-Pokémon auf deiner Bank hast, fügt diese Attacke 70 Schadenspunkte mehr zu.",
			it: "Se hai dei Pokémon di Fase 2 {D} nella tua panchina, questo attacco infligge 70 danni in più.",
			pt: "Se você tiver algum Pokémon {D} Estágio 2 no seu Banco, este ataque causará 70 pontos de dano a mais."
		},

		damage: "20+"
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		cardmarket: 857634
	}
}

export default card