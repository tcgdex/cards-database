import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Stunfisk",
		fr: "Limonde",
		es: "Stunfisk",
		'es-mx': "Stunfisk",
		de: "Flunschlik",
		it: "Stunfisk",
		pt: "Stunfisk"
	},

	illustrator: "Tetsu Kayama",
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Pouncing Trap",
			fr: "Piège Bondissant",
			es: "Trampa Brinco",
			'es-mx': "Trampa Asaltante",
			de: "Sprungfalle",
			it: "Trappola Scattante",
			pt: "Armadilha Saltitante"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat. During your next turn, the Defending Pokémon takes 100 more damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite. Pendant votre prochain tour, le Pokémon Défenseur subit 100 dégâts supplémentaires provenant des attaques (après application de la Faiblesse et de la Résistance).",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse. Durante tu próximo turno, los ataques hacen 100 puntos de daño más al Pokémon Defensor (después de aplicar Debilidad y Resistencia).",
			'es-mx': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse. Durante tu próximo turno, el Pokémon Defensor recibe 100 puntos de daño más de ataques (después de aplicar Debilidad y Resistencia).",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen. Während deines nächsten Zuges werden dem Verteidigenden Pokémon durch Attacken 100 Schadenspunkte mehr zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi. Durante il tuo prossimo turno, il Pokémon difensore subisce 100 danni in più dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar. Durante o seu próximo turno, o Pokémon Defensor receberá 100 pontos de dano a mais de ataques (depois de aplicar Fraqueza e Resistência)."
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675874,
		cardmarket: 869673
	}
}

export default card