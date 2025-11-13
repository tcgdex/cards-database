import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [448],
	set: Set,

	name: {
		en: "Lucario ex",
		fr: "Lucario-ex",
		es: "Lucario ex",
		pt: "Lucario ex",
		it: "Lucario-ex",
		de: "Lucario-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Fighting"],
	evolveFrom: {
		en: "Riolu",
		fr: "Riolu",
		es: "Riolu",
		pt: "Riolu",
		it: "Riolu",
		de: "Riolu"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Aura Uppercut",
			fr: "Uppercut Aura",
			es: "Gancho Aura",
			pt: "Gancho de Aura",
			it: "Auramontante",
			de: "Aura-Uppercut"
		},

		damage: 50
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Tornado Rush",
			fr: "Ruée Tornade",
			es: "Tornado Raudo",
			pt: "Arremetida Tornado",
			it: "Tornadoraffica",
			de: "Tornadoansturm"
		},

		effect: {
			en: "During your next turn, this Pokémon's Tornado Rush attack does 100 more damage (before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, l'attaque Ruée Tornade de ce Pokémon inflige 100 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			es: "Durante tu próximo turno, el ataque Tornado Raudo de este Pokémon hace 100 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
			pt: "Durante o seu próximo turno, o ataque Arremetida Tornado deste Pokémon causará 100 pontos de dano a mais (antes de aplicar Fraqueza e Resistência).",
			it: "Durante il tuo prossimo turno, l'attacco Tornadoraffica di questo Pokémon infligge 100 danni in più, prima di aver applicato debolezza e resistenza.",
			de: "Während deines nächsten Zuges fügt die Attacke Tornadoansturm dieses Pokémon 100 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: true,
		normal: false
	},

	illustrator: "PLANETA Tsuji",

	thirdParty: {
		cardmarket: 805440
	}
}

export default card