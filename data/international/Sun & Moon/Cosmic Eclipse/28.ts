import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Entei",
		'fr-fr': "Entei",
		'es-es': "Entei",
		'it-it': "Entei",
		'pt-br': "Entei",
		'de-de': "Entei"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		244,
	],

	hp: 130,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Rally Back",
				'fr-fr': "Répercussions",
				'es-es': "Apoyo Vengativo",
				'it-it': "Radunata Rinforzi",
				'pt-br': "Responder à Altura",
				'de-de': "Aufholjagd"
			},
			effect: {
				'en-us': "If any of your Pokémon were Knocked Out by damage from an opponent’s attack during their last turn, this attack does 90 more damage.",
				'fr-fr': "Si l’un de vos Pokémon a été mis K.O. par les dégâts d’une attaque de votre adversaire pendant son dernier tour, cette attaque inflige 90 dégâts supplémentaires.",
				'es-es': "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque de tu rival durante su último turno, este ataque hace 90 puntos de daño más.",
				'it-it': "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni inflitti da un attacco del tuo avversario durante il suo ultimo turno, questo attacco infligge 90 danni in più.",
				'pt-br': "Se algum dos seus Pokémon tiver sido Nocauteado pelo dano de um ataque do seu oponente durante a última vez dele(a) jogar, este ataque causará 90 pontos de dano a mais.",
				'de-de': "Wenn mindestens 1 deiner Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke kampfunfähig wurde, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Fire Mane",
				'fr-fr': "Crinière de Feu",
				'es-es': "Crin de Fuego",
				'it-it': "Criniera di Fuoco",
				'pt-br': "Crina de Fogo",
				'de-de': "Flammenmähne"
			},

			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "A Pokémon that races across the land. It is said that one is born every time a new volcano appears.",
	},

	thirdParty: {
		cardmarket: 407789,
		tcgplayer: 201201
	}
}

export default card
