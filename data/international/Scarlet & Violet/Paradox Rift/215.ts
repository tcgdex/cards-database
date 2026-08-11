import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [967],
	set: Set,

	name: {
		'en-us': "Cyclizar",
		'fr-fr': "Motorizard",
		'es-es': "Cyclizar",
		'it-it': "Cyclizar",
		'pt-br': "Cyclizar",
		'de-de': "Mopex"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'es-es': "Apisonar",
			'it-it': "Carica",
			'pt-br': "Aríete",
			'de-de': "Ramme"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Driving Buddy",
			'fr-fr': "Copilote",
			'es-es': "Amigo Conductor",
			'it-it': "Compagno di Guida",
			'pt-br': "Carona Amiga",
			'de-de': "Mitfahrkumpel"
		},

		effect: {
			'en-us': "If you played a Supporter card from your hand during this turn, this attack does 70 more damage.",
			'fr-fr': "Si vous avez joué une carte Supporter de votre main pendant ce tour, cette attaque inflige 70 dégâts supplémentaires.",
			'es-es': "Si has jugado una carta de Partidario de tu mano durante este turno, este ataque hace 70 puntos de daño más.",
			'it-it': "Se hai giocato una carta Aiuto dalla tua mano durante questo turno, questo attacco infligge 70 danni in più.",
			'pt-br': "Se você jogou uma carta de Apoiador da sua mão durante este turno, este ataque causará 70 pontos de dano a mais.",
			'de-de': "Wenn du eine Unterstützerkarte während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke 70 Schadenspunkte mehr zu."
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
	regulationMark: "G",

	description: {
		'en-us': "Apparently Cyclizar has been allowing people to ride on its back since ancient times. Depictions of this have been found in 10,000-year-old murals.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740758,
				tcgplayer: 523896,
				cardtrader: 265504
			}
		},
	],

	illustrator: "Mina Nakai",

	
}

export default card
