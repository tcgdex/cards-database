import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Chandelure",
		'fr-fr': "Lugulabre",
		'es-es': "Chandelure",
		'it-it': "Chandelure",
		'pt-br': "Chandelure",
		'de-de': "Skelabra"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		609,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Lampent",
		'fr-fr': "Mélancolux",
		'es-es': "Lampent",
		'it-it': "Lampent",
		'pt-br': "Lampent",
		'de-de': "Laternecto"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Sinister Selection",
				'fr-fr': "Sélection Sinistre",
				'es-es': "Selección Siniestra",
				'it-it': "Sceltasinistra",
				'pt-br': "Seleção Sinistra",
				'de-de': "Unheimliche Auswahl"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may look at the top 2 cards of your deck and put 1 of them into your hand. Discard the other card.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez regarder les 2 cartes du dessus de votre deck et ajouter l'une d'entre elles à votre main. Défaussez l'autre carte.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes mirar las 2 primeras cartas de tu baraja y poner 1 de ellas en tu mano. Descarta la otra carta.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi guardare le prime due carte del tuo mazzo e aggiungerne una alle carte che hai in mano. Scarta l'altra carta.",
				'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), você pode ver 2 cards de cima do seu baralho e colocar 1 deles na sua mão. Descarte o outro card.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du die obersten 2 Karten deines Decks anschauen und 1 davon auf deine Hand nehmen. Lege die andere Karte auf deinen Ablagestapel."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Past Friends",
				'fr-fr': "Amis d'Antan",
				'es-es': "Amigos del Pasado",
				'it-it': "Vecchie Amicizie",
				'pt-br': "Amigos do Passado",
				'de-de': "Erloschene Freunde"
			},
			effect: {
				'en-us': "This attack does 10 more damage for each Supporter card in your discard pile.",
				'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque carte Supporter dans votre pile de défausse.",
				'es-es': "Este ataque hace 10 puntos de daño más por cada carta de Partidario en tu pila de descartes.",
				'it-it': "Questo attacco infligge 10 danni in più per ogni carta Aiuto nella tua pila degli scarti.",
				'pt-br': "Este ataque causa 10 de danos adicionais para cada card de Apoiador na sua pilha de descarte.",
				'de-de': "Dieser Angriff fügt für jede Unterstützerkarte in deinem Ablagestapel 10 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The spirits burned up in its ominous flame lose their way and wander this world forever.",
	},

	thirdParty: {
		cardmarket: 291541,
		tcgplayer: 121139
	}
}

export default card
