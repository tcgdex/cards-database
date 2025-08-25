import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Aipom",
		fr: "Capumain",
		es: "Aipom",
		it: "Aipom",
		pt: "Aipom",
		de: "Griffel"
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
				en: "Scampering Tail",
				fr: "Queue Fuyante",
				es: "Cola Presurosa",
				it: "Coda Zompettante",
				pt: "Cauda Ligeira",
				de: "Huschender Schweif"
			},
			effect: {
				en: "Once during your turn (before your attack), you may put the top card of your opponent’s deck on the bottom of their deck without looking at it.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer la carte du dessus du deck de votre adversaire en dessous de son deck sans la regarder.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes poner la primera carta de la baraja de tu rival en la parte inferior de su baraja sin mirarla.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi prendere la prima carta del mazzo del tuo avversario e metterla in fondo al suo mazzo senza guardarla.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode colocar a primeira carta do baralho do seu oponente como a última carta do baralho dele(a), sem olhar aquela carta.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du die oberste Karte des Decks deines Gegners, ohne sie dir anzuschauen, unter sein Deck legen."
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
				en: "Tail Smack",
				fr: "Coup de Queue",
				es: "Bofetón Cola",
				it: "Codasberla",
				pt: "Ataque de Cauda",
				de: "Schweifschlag"
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

	thirdParty: {
		cardmarket: 408469,
		tcgplayer: 201291
	}
}

export default card
