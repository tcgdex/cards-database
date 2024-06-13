import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [303],
	set: Set,

	name: {
		en: "Mawile",
		fr: "Mysdibule",
		es: "Mawile",
		it: "Mawile",
		pt: "Mawile",
		de: "Flunkifer"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Tempting Trap",
			fr: "Piège Alléchant",
			es: "Trampa Tentadora",
			it: "Trappola Allettante",
			pt: "Armadilha Tentadora",
			de: "Verlockende Falle"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat. During your next turn, the Defending Pokémon takes 90 more damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite. Pendant votre prochain tour, le Pokémon Défenseur subit 90 dégâts supplémentaires provenant des attaques (après application de la Faiblesse et de la Résistance).",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse. Durante tu próximo turno, los ataques hacen 90 puntos de daño más al Pokémon Defensor (después de aplicar Debilidad y Resistencia).",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi. Durante il tuo prossimo turno, il Pokémon difensore subisce 90 danni in più dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar. Durante o seu próximo turno, o Pokémon Defensor receberá 90 pontos de dano a mais de ataques (depois de aplicar Fraqueza e Resistência).",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen. Während deines nächsten Zuges werden dem Verteidigenden Pokémon durch Attacken 90 Schadenspunkte mehr zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			it: "Morso",
			pt: "Mordida",
			de: "Biss"
		},

		damage: 90
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	}
}

export default card