import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Lanturn",
		'fr-fr': "Lanturn",
		'es-es': "Lanturn",
		'it-it': "Lanturn",
		'pt-br': "Lanturn",
		'de-de': "Lanturn"
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
		'en-us': "Chinchou",
		'fr-fr': "Loupio",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Blinking Lights",
				'fr-fr': "Lumières Clignotantes",
				'es-es': "Luces Parpadeantes",
				'it-it': "Luci a Intermittenza",
				'pt-br': "Luzes Cintilantes",
				'de-de': "Blinkende Lichter"
			},
			effect: {
				'en-us': "As often as you like during your turn (before your attack), you may look at the top card of your opponent’s deck.",
				'fr-fr': "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez regarder la carte du dessus du deck de votre adversaire.",
				'es-es': "Todas las veces que quieras durante tu turno (antes de tu ataque), puedes mirar la primera carta de la baraja de tu rival.",
				'it-it': "Durante il tuo turno, prima di attaccare, puoi guardare la prima carta del mazzo del tuo avversario tutte le volte che vuoi.",
				'pt-br': "Quantas vezes desejar durante a sua vez de jogar (antes de atacar), você pode olhar a primeira carta do baralho do seu oponente.",
				'de-de': "Beliebig oft während deines Zuges (bevor du angreifst) kannst du dir die oberste Karte des Decks deines Gegners anschauen."
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
				'en-us': "Swirling Flow",
				'fr-fr': "Flot Tourbillon",
				'es-es': "Torbellino Caudaloso",
				'it-it': "Flusso Vorticoso",
				'pt-br': "Turbilhão Corrente",
				'de-de': "Wirbelstrom"
			},
			effect: {
				'en-us': "You may have your opponent shuffle their deck.",
				'fr-fr': "Vous pouvez demander à votre adversaire de mélanger son deck.",
				'es-es': "Puedes hacer que tu rival baraje las cartas de su baraja.",
				'it-it': "Puoi far rimischiare il suo mazzo al tuo avversario.",
				'pt-br': "Você pode fazer com que o seu oponente embaralhe o próprio baralho.",
				'de-de': "Du kannst deinen Gegner dazu veranlassen, sein Deck zu mischen."
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

	description: {
		'en-us': "When the bacteria living inside its antennae absorb Lanturn's bodily fluids, a strong luminescent effect is produced.",
	},

	thirdParty: {
		cardmarket: 408009,
		tcgplayer: 201246
	}
}

export default card
