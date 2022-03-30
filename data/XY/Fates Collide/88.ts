import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Cinccino",
		fr: "Pashmilla",
		es: "Cinccino",
		it: "Cinccino",
		pt: "Cinccino",
		de: "Chillabell"
	},
	illustrator: "MAHOU",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		573,
	],
	hp: 90,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Minccino",
		fr: "Chinchidou",
		es: "Minccino",
		it: "Minccino",
		pt: "Minccino",
		de: "Picochilla"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Covet",
				fr: "Implore",
				es: "Antojo",
				it: "Supplica",
				pt: "Cobiça",
				de: "Bezirzer"
			},
			effect: {
				en: "Your opponent reveals his or her hand. Choose a card you find there and put it on the bottom of your opponent's deck.",
				fr: "Votre adversaire montre sa main. Choisissez une carte que vous y trouvez et mettez-la en dessous du deck de votre adversaire.",
				es: "Tu rival enseña las cartas de su mano. Elige 1 carta que encuentres entre ellas y ponla en la parte inferior de la baraja de tu rival.",
				it: "Il tuo avversario mostra le carte che ha in mano. Scegline una e mettila in fondo al suo mazzo.",
				pt: "Seu oponente revela a própria mão. Escolha um card que encontrar e coloque-o embaixo do baralho do seu oponente.",
				de: "Dein Gegner deckt seine Handkarten auf. Wähle 1 dieser Karten und lege sie unter das Deck deines Gegners."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Last Resort",
				fr: "Dernier Recours",
				es: "Última Baza",
				it: "Ultimascelta",
				pt: "Último Recurso",
				de: "Zuflucht"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
				it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
				pt: "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
				de: "Wirf 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
