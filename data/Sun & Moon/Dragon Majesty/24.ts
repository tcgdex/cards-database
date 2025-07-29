import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Feraligatr",
		fr: "Aligatueur",
		es: "Feraligatr",
		it: "Feraligatr",
		pt: "Feraligatr",
		de: "Impergator"
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
		en: "Croconaw",
		fr: "Crocrodil",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Downpour",
				fr: "Averse",
				es: "Diluvio",
				it: "Diluvio",
				pt: "Aguaceiro",
				de: "Wolkenbruch"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may discard a Water Energy card from your hand.",
				fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez défausser une carte Énergie Water de votre main.",
				es: "Todas las veces que quieras durante tu turno (antes de tu ataque), puedes descartar 1 carta de Energía Water de tu mano.",
				it: "Durante il tuo turno, prima di attaccare, puoi scartare una carta Energia Water che hai in mano tutte le volte che vuoi.",
				pt: "Quantas vezes desejar durante a sua vez de jogar (antes de atacar), você pode descartar 1 carta de Energia Water da sua mão.",
				de: "Beliebig oft während deines Zuges (bevor du angreifst) kannst du 1 Water-Energiekarte aus deiner Hand auf deinen Ablagestapel legen."
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
				en: "Riptide",
				fr: "Courant",
				es: "Aguas Revueltas",
				it: "Corrente Impetuosa",
				pt: "Rebentação",
				de: "Springflut"
			},
			effect: {
				en: "This attack does 20 more damage for each Water Energy card in your discard pile. Then, shuffle those cards into your deck.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque carte Énergie Water dans votre pile de défausse. Mélangez ensuite ces cartes avec votre deck.",
				es: "Este ataque hace 20 puntos de daño más por cada carta de Energía Water en tu pila de descartes. Después, pon esas cartas en tu baraja y barájalas todas.",
				it: "Questo attacco infligge 20 danni in più per ogni carta Energia Water nella tua pila degli scarti. Poi rimischia quelle carte nel tuo mazzo.",
				pt: "Este ataque causa 20 pontos de dano a mais para cada carta de Energia Water na sua pilha de descarte. Em seguida, embaralhe aquelas cartas no seu baralho.",
				de: "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl der Water-Energiekarten in deinem Ablagestapel zu. Mische jene Karten anschließend in dein Deck."
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

	thirdParty: {
		cardmarket: 363496
	}
}

export default card
