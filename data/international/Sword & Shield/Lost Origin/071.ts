import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [303],
	set: Set,

	name: {
		'en-us': "Mawile",
		'fr-fr': "Mysdibule",
		'es-es': "Mawile",
		'it-it': "Mawile",
		'pt-br': "Mawile",
		'de-de': "Flunkifer"
	},

	illustrator: "kurumitsu",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Tempting Trap",
			'fr-fr': "Piège Alléchant",
			'es-es': "Trampa Tentadora",
			'it-it': "Trappola Allettante",
			'pt-br': "Armadilha Tentadora",
			'de-de': "Verlockende Falle"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat. During your next turn, the Defending Pokémon takes 90 more damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite. Pendant votre prochain tour, le Pokémon Défenseur subit 90 dégâts supplémentaires provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse. Durante tu próximo turno, los ataques hacen 90 puntos de daño más al Pokémon Defensor (después de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi. Durante il tuo prossimo turno, il Pokémon difensore subisce 90 danni in più dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar. Durante o seu próximo turno, o Pokémon Defensor receberá 90 pontos de dano a mais de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen. Während deines nächsten Zuges werden dem Verteidigenden Pokémon durch Attacken 90 Schadenspunkte mehr zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'es-es': "Mordisco",
			'it-it': "Morso",
			'pt-br': "Mordida",
			'de-de': "Biss"
		},

		damage: 90
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674080,
				tcgplayer: 283948
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674080,
				tcgplayer: 283948
			}
		},
	],
}

export default card
