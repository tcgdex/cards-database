import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [336],
	set: Set,

	name: {
		'en-us': "Seviper",
		'fr-fr': "Séviper",
		'es-es': "Seviper",
		'it-it': "Seviper",
		'pt-br': "Seviper",
		'de-de': "Vipitis"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	attacks: [{
		name: {
			'en-us': "Strong Tail",
			'fr-fr': "Queue Puissante",
			'es-es': "Cola Fuerte",
			'it-it': "Fortecoda",
			'pt-br': "Cauda Poderosa",
			'de-de': "Starker Schlag"
		},

		effect: {
			'en-us': "If you played a Single Strike Supporter card from your hand during this turn, this attack does 90 more damage.",
			'fr-fr': "Si vous avez joué une carte Supporter Poing Final de votre main pendant ce tour, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Si has jugado 1 carta de Partidario de Golpe Brusco de tu mano durante este turno, este ataque hace 90 puntos de daño más.",
			'it-it': "Se hai giocato una carta Aiuto Colpo Singolo dalla tua mano durante questo turno, questo attacco infligge 90 danni in più.",
			'pt-br': "Se você jogou 1 carta de Apoiador Golpe Decisivo da sua mão durante este turno, este ataque causará 90 pontos de dano a mais.",
			'de-de': "Wenn du eine Fokussierter-Angriff-Unterstützerkarte während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "90+",
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "Constant polishing makes the edge of the blade on its tail extremely sharp. It's Zangoose's archrival."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567210,
				tcgplayer: 241776
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567210,
				tcgplayer: 241776
			}
		},
	],
}

export default card
