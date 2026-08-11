import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mabosstiff",
		'fr-fr': "Dogrino",
		'es-es': "Mabosstiff",
		'es-mx': "Mabosstiff",
		'de-de': "Mastifioso",
		'it-it': "Mabosstiff",
		'pt-br': "Mabosstiff"
	},

	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [943],
	hp: 140,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Maschiff"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'es-es': "Mordisco",
			'es-mx': "Mordida",
			'de-de': "Biss",
			'it-it': "Morso",
			'pt-br': "Mordida"
		},

		cost: ["Darkness", "Darkness"],

		damage: 60
	}, {
		name: {
			'en-us': "Plunging Headbutt",
			'fr-fr': "Coup d'Boule Plongeant",
			'es-es': "Cabezazo Impetuoso",
			'es-mx': "Cabezazo en Picada",
			'de-de': "Kopfstoßsprung",
			'it-it': "Zuccata a Piombo",
			'pt-br': "Mergulhar de Cabeça"
		},

		cost: ["Darkness", "Darkness", "Darkness"],

		damage: 210,

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes 100 more damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 100 dégâts supplémentaires provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 100 puntos de daño más a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'es-mx': "Durante el próximo turno de tu rival, este Pokémon recibe 100 puntos de daño más de ataques (después de aplicar Debilidad y Resistencia).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 100 Schadenspunkte mehr zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 100 danni in più dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 100 pontos de dano a mais de ataques (depois de aplicar Fraqueza e Resistência)."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895843,
				tcgplayer: 704815
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895843,
				tcgplayer: 704815
			}
		},
	],
}

export default card
