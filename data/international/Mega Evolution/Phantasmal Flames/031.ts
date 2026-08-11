import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Boltund",
		'fr-fr': "Fulgudog",
		'es-es': "Boltund",
		'es-mx': "Boltund",
		'de-de': "Bellektro",
		'it-it': "Boltund",
		'pt-br': "Boltund"
	},

	evolveFrom: {
		'en-us': "Yamper",
		'fr-fr': "Voltoutou",
		'es-es': "Yamper",
		'es-mx': "Yamper",
		'de-de': "Voldi",
		'it-it': "Yamper",
		'pt-br': "Yamper",
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [836],
	hp: 130,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Electric Run",
			'fr-fr': "Course Électrique",
			'es-es': "Escapada Eléctrica",
			'es-mx': "Carrera Eléctrica",
			'de-de': "Elektroflitzer",
			'it-it': "Corsa Elettrica",
			'pt-br': "Corrida Eletrizante"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 70 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 70 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 70 puntos de daño más.",
			'es-mx': "Lanza 1 moneda. Si sale cara, este ataque hace 70 puntos de daño más.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 70 Schadenspunkte mehr zu.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 70 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 70 pontos de dano a mais."
		},

		damage: "70+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "It sends electricity through its legs to boost their strength. Running at top speed, it easily breaks 50 mph.",
	},

	illustrator: "Orca",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857606,
				tcgplayer: 662134,
				cardtrader: 356814
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857606,
				tcgplayer: 662134,
				cardtrader: 356814
			}
		},
	],
}

export default card
