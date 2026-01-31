import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Team Rocket's Diglett",
		fr: "Taupiqueur de la Team Rocket",
		es: "Diglett del Team Rocket",
		'es-mx': "Diglett del Equipo Rocket",
		de: "Team Rockets Digda",
		it: "Diglett del Team Rocket",
		pt: "Diglett da Equipe Rocket"
	},

	illustrator: "Yuriko Akase",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Relentless Burrowing",
			fr: "Creusement Incessant",
			es: "Excavación Incesante",
			'es-mx': "Excavación Implacable",
			de: "Unermüdliches Verbuddeln",
			it: "Scavare Incessante",
			pt: "Escavação Incansável"
		},

		effect: {
			en: "Flip a coin until you get tails. For each heads, discard the top card of your opponent's deck.",
			fr: "Lancez une pièce jusqu'à obtenir un côté pile. Pour chaque côté face, défaussez la carte du dessus du deck de votre adversaire.",
			es: "Lanza 1 moneda hasta que salga cruz. Por cada cara, descarta la primera carta de la baraja de tu rival.",
			'es-mx': "Lanza 1 moneda hasta que salga cruz. Por cada cara, descarta la primera carta del mazo de tu rival.",
			de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Lege pro Kopf die oberste Karte des Decks deines Gegners auf seinen Ablagestapel.",
			it: "Lancia una moneta finché non esce croce. Ogni volta che esce testa, scarta la prima carta del mazzo del tuo avversario.",
			pt: "Jogue uma moeda até sair coroa. Para cada cara, descarte a carta de cima do baralho do seu oponente."
		}
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675912,
		cardmarket: 869711
	}
}

export default card