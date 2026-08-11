import { Card } from 'models/database/card'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		'en-us': "Feraligatr",
		'fr-fr': "Aligatueur",
		'es-es': "Feraligatr",
		'it-it': "Feraligatr",
		'pt-br': "Feraligatr",
		'de-de': "Impergator"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		160,
	],

	hp: 160,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Croconaw",
		'fr-fr': "Crocrodil",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Downpour",
				'fr-fr': "Averse",
				'es-es': "Diluvio",
				'it-it': "Diluvio",
				'pt-br': "Aguaceiro",
				'de-de': "Wolkenbruch"
			},
			effect: {
				'en-us': "As often as you like during your turn (before your attack), you may discard a Water Energy card from your hand.",
				'fr-fr': "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez défausser une carte Énergie Water de votre main.",
				'es-es': "Todas las veces que quieras durante tu turno (antes de tu ataque), puedes descartar 1 carta de Energía Water de tu mano.",
				'it-it': "Durante il tuo turno, prima di attaccare, puoi scartare una carta Energia Water che hai in mano tutte le volte che vuoi.",
				'pt-br': "Quantas vezes desejar durante a sua vez de jogar (antes de atacar), você pode descartar 1 carta de Energia Water da sua mão.",
				'de-de': "Beliebig oft während deines Zuges (bevor du angreifst) kannst du 1 Water-Energiekarte aus deiner Hand auf deinen Ablagestapel legen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Riptide",
				'fr-fr': "Courant",
				'es-es': "Aguas Revueltas",
				'it-it': "Corrente Impetuosa",
				'pt-br': "Rebentação",
				'de-de': "Springflut"
			},
			effect: {
				'en-us': "This attack does 20 more damage for each Water Energy card in your discard pile. Then, shuffle those cards into your deck.",
				'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque carte Énergie Water dans votre pile de défausse. Mélangez ensuite ces cartes avec votre deck.",
				'es-es': "Este ataque hace 20 puntos de daño más por cada carta de Energía Water en tu pila de descartes. Después, pon esas cartas en tu baraja y barájalas todas.",
				'it-it': "Questo attacco infligge 20 danni in più per ogni carta Energia Water nella tua pila degli scarti. Poi rimischia quelle carte nel tuo mazzo.",
				'pt-br': "Este ataque causa 20 pontos de dano a mais para cada carta de Energia Water na sua pilha de descarte. Em seguida, embaralhe aquelas cartas no seu baralho.",
				'de-de': "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl der Water-Energiekarten in deinem Ablagestapel zu. Mische jene Karten anschließend in dein Deck."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "When it bites with its massive and powerful jaws, it shakes its head and savagely tears its victim up.",
	},

	thirdParty: {
		cardmarket: 363496,
		tcgplayer: 175386
	}
}

export default card
