import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Gallade",
		'fr-fr': "Gallame",
		'es-es': "Gallade",
		'it-it': "Gallade",
		'pt-br': "Gallade",
		'de-de': "Galagladi"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		475,
	],

	hp: 150,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Kirlia",
		'fr-fr': "Kirlia",
		'es-es': "Kirlia",
		'it-it': "Kirlia",
		'pt-br': "Kirlia",
		'de-de': "Kirlia"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Premonition",
				'fr-fr': "Présage",
				'es-es': "Presentimiento",
				'it-it': "Presentimento",
				'pt-br': "Premonição",
				'de-de': "Vorhersage"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may look at the top 5 cards of your deck and put them back on top of your deck in any order.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez regarder les 5 cartes du dessus de votre deck et les replacer sur le dessus de votre deck dans l'ordre de votre choix.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes mirar las 5 primeras cartas de tu baraja y volver a ponerlas en la parte superior de tu baraja en el orden que quieras.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi guardare le prime cinque carte del tuo mazzo e rimetterle in cima al mazzo nell'ordine che preferisci.",
				'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), você poderá ver os 5 cards de cima do seu baralho e colocá-los de volta no topo do baralho em qualquer ordem.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du die obersten 5 Karten deines Decks anschauen und sie in beliebiger Reihenfolge zurück auf dein Deck legen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sensitive Blade",
				'fr-fr': "Lame Sensible",
				'es-es': "Cuchilla Sensible",
				'it-it': "Lamasensibile",
				'pt-br': "Lâmina Sensível",
				'de-de': "Feinfühlige Klinge"
			},
			effect: {
				'en-us': "If you played a Supporter card from your hand during this turn, this attack does 70 more damage.",
				'fr-fr': "Si vous avez joué une carte Supporter de votre main pendant ce tour, cette attaque inflige 70 dégâts supplémentaires.",
				'es-es': "Si has jugado 1 carta de Partidario de tu mano durante este turno, este ataque hace 70 puntos de daño más.",
				'it-it': "Se hai giocato una carta Aiuto dalla tua mano durante questo turno, questo attacco infligge 70 danni in più.",
				'pt-br': "Se você jogou um card de Apoiador da sua mão durante esta vez de jogar, este ataque causará 70 de danos adicionais.",
				'de-de': "Wenn du während dieses Zuges 1 Unterstützerkarte von deiner Hand gespielt hast, fügt dieser Angriff 70 weitere Schadenspunkte zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "A master of courtesy and swordsmanship, it fights using extending swords on its elbows.",
	},

	thirdParty: {
		cardmarket: 286330,
		tcgplayer: 107203
	}
}

export default card
