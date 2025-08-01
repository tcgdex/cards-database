import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Lanturn",
		fr: "Lanturn",
		es: "Lanturn",
		it: "Lanturn",
		pt: "Lanturn",
		de: "Lanturn"
	},

	illustrator: "otumami",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		171,
	],

	hp: 110,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Chinchou",
		fr: "Loupio",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Blinking Lights",
				fr: "Lumières Clignotantes",
				es: "Luces Parpadeantes",
				it: "Luci a Intermittenza",
				pt: "Luzes Cintilantes",
				de: "Blinkende Lichter"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may look at the top card of your opponent’s deck.",
				fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez regarder la carte du dessus du deck de votre adversaire.",
				es: "Todas las veces que quieras durante tu turno (antes de tu ataque), puedes mirar la primera carta de la baraja de tu rival.",
				it: "Durante il tuo turno, prima di attaccare, puoi guardare la prima carta del mazzo del tuo avversario tutte le volte che vuoi.",
				pt: "Quantas vezes desejar durante a sua vez de jogar (antes de atacar), você pode olhar a primeira carta do baralho do seu oponente.",
				de: "Beliebig oft während deines Zuges (bevor du angreifst) kannst du dir die oberste Karte des Decks deines Gegners anschauen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Swirling Flow",
				fr: "Flot Tourbillon",
				es: "Torbellino Caudaloso",
				it: "Flusso Vorticoso",
				pt: "Turbilhão Corrente",
				de: "Wirbelstrom"
			},
			effect: {
				en: "You may have your opponent shuffle their deck.",
				fr: "Vous pouvez demander à votre adversaire de mélanger son deck.",
				es: "Puedes hacer que tu rival baraje las cartas de su baraja.",
				it: "Puoi far rimischiare il suo mazzo al tuo avversario.",
				pt: "Você pode fazer com que o seu oponente embaralhe o próprio baralho.",
				de: "Du kannst deinen Gegner dazu veranlassen, sein Deck zu mischen."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 408009
	}
}

export default card
