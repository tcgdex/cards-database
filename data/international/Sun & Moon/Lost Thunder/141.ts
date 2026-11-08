import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Gardevoir",
		'fr-fr': "Gardevoir",
		'es-es': "Gardevoir",
		'it-it': "Gardevoir",
		'pt-br': "Gardevoir",
		'de-de': "Guardevoir"
	},

	illustrator: "Ryota Murayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		282,
	],

	hp: 130,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Kirlia",
		'fr-fr': "Kirlia",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Brilliant Search",
				'fr-fr': "Recherche Brillante",
				'es-es': "Búsqueda Brillante",
				'it-it': "Splendicerca",
				'pt-br': "Busca Brilhante",
				'de-de': "Brillante Suche"
			},
			effect: {
				'en-us': "Search your deck for up to 3 cards and put them into your hand. Then, shuffle your deck.",
				'fr-fr': "Cherchez jusqu’à 3 cartes dans votre deck et ajoutez-les à votre main. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja hasta 3 cartas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo fino a tre carte e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por até 3 cartas no seu baralho e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach bis zu 3 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sensitive Ray",
				'fr-fr': "Rayon Sensible",
				'es-es': "Rayo Sensible",
				'it-it': "Raggio Sensibile",
				'pt-br': "Raio Sensível",
				'de-de': "Feinfühliger Strahl"
			},
			effect: {
				'en-us': "If you played a Supporter card from your hand during this turn, this attack does 90 more damage.",
				'fr-fr': "Si vous avez joué une carte Supporter de votre main pendant ce tour, cette attaque inflige 90 dégâts supplémentaires.",
				'es-es': "Si has jugado 1 carta de Partidario de tu mano durante este turno, este ataque hace 90 puntos de daño más.",
				'it-it': "Se hai giocato una carta Aiuto dalla tua mano durante questo turno, questo attacco infligge 90 danni in più.",
				'pt-br': "Se você jogou 1 carta de Apoiador da sua mão durante esta vez de jogar, este ataque causará 90 pontos de dano a mais.",
				'de-de': "Wenn du eine Unterstützerkarte während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: "70+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It has the power to predict the future. Its power peaks when it is protecting its Trainer.",
	},

	thirdParty: {
		cardmarket: 365778,
		tcgplayer: 178960
	}
}

export default card
