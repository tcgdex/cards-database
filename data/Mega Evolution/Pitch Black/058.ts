import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Mabosstiff",
		fr: "Dogrino",
		es: "Mabosstiff",
		'es-mx': "Mabosstiff",
		de: "Mastifioso",
		it: "Mabosstiff",
		pt: "Mabosstiff"
	},

	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [943],
	hp: 140,
	types: ["Darkness"],

	evolveFrom: {
		en: "Maschiff"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			'es-mx': "Mordida",
			de: "Biss",
			it: "Morso",
			pt: "Mordida"
		},

		cost: ["Darkness", "Darkness"],

		damage: 60
	}, {
		name: {
			en: "Plunging Headbutt",
			fr: "Coup d'Boule Plongeant",
			es: "Cabezazo Impetuoso",
			'es-mx': "Cabezazo en Picada",
			de: "Kopfstoßsprung",
			it: "Zuccata a Piombo",
			pt: "Mergulhar de Cabeça"
		},

		cost: ["Darkness", "Darkness", "Darkness"],

		damage: 210,

		effect: {
			en: "During your opponent's next turn, this Pokémon takes 100 more damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 100 dégâts supplémentaires provenant des attaques (après application de la Faiblesse et de la Résistance).",
			es: "Durante el próximo turno de tu rival, los ataques hacen 100 puntos de daño más a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'es-mx': "Durante el próximo turno de tu rival, este Pokémon recibe 100 puntos de daño más de ataques (después de aplicar Debilidad y Resistencia).",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 100 Schadenspunkte mehr zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 100 danni in più dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Durante o próximo turno do seu oponente, este Pokémon receberá 100 pontos de dano a mais de ataques (depois de aplicar Fraqueza e Resistência)."
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
