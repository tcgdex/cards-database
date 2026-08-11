import { Card } from 'models/database/card'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		'en-us': "Shaymin",
		'fr-fr': "Shaymin",
		'es-es': "Shaymin",
		'it-it': "Shaymin",
		'pt-br': "Shaymin",
		'de-de': "Shaymin"
	},

	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		492,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Flippity Flap",
				'fr-fr': "Flip Flap",
				'es-es': "Aleteo Repentino",
				'it-it': "Batti e Ribatti",
				'pt-br': "Bater de Asas",
				'de-de': "Großes Flattern"
			},
			effect: {
				'en-us': "Shuffle your hand into your deck. Then, draw 6 cards.",
				'fr-fr': "Mélangez votre main avec votre deck. Ensuite, piochez 6 cartes.",
				'es-es': "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 6 cartas.",
				'it-it': "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca sei carte.",
				'pt-br': "Embaralhe a sua mão no seu baralho. Em seguida, compre 6 cartas.",
				'de-de': "Mische deine Handkarten in dein Deck. Ziehe anschließend 6 Karten."
			},

		},
		{
			cost: [
				"Grass",
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
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It can dissolve toxins in the air to instantly transform ruined land into a lush field of flowers.",
	},

	thirdParty: {
		cardmarket: 302145,
		tcgplayer: 146659
	}
}

export default card
