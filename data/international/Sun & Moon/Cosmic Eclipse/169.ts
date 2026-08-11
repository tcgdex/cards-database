import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Aipom",
		'fr-fr': "Capumain",
		'es-es': "Aipom",
		'it-it': "Aipom",
		'pt-br': "Aipom",
		'de-de': "Griffel"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		190,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Scampering Tail",
				'fr-fr': "Queue Fuyante",
				'es-es': "Cola Presurosa",
				'it-it': "Coda Zompettante",
				'pt-br': "Cauda Ligeira",
				'de-de': "Huschender Schweif"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may put the top card of your opponent’s deck on the bottom of their deck without looking at it.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer la carte du dessus du deck de votre adversaire en dessous de son deck sans la regarder.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes poner la primera carta de la baraja de tu rival en la parte inferior de su baraja sin mirarla.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi prendere la prima carta del mazzo del tuo avversario e metterla in fondo al suo mazzo senza guardarla.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode colocar a primeira carta do baralho do seu oponente como a última carta do baralho dele(a), sem olhar aquela carta.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du die oberste Karte des Decks deines Gegners, ohne sie dir anzuschauen, unter sein Deck legen."
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
				'en-us': "Tail Smack",
				'fr-fr': "Coup de Queue",
				'es-es': "Bofetón Cola",
				'it-it': "Codasberla",
				'pt-br': "Ataque de Cauda",
				'de-de': "Schweifschlag"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "As it did more and more with its tail, its hands became clumsy. It makes its nest high in the treetops.",
	},

	thirdParty: {
		cardmarket: 408469,
		tcgplayer: 201291
	}
}

export default card
