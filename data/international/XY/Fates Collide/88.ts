import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Cinccino",
		'fr-fr': "Pashmilla",
		'es-es': "Cinccino",
		'it-it': "Cinccino",
		'pt-br': "Cinccino",
		'de-de': "Chillabell"
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
		'en-us': "Minccino",
		'fr-fr': "Chinchidou",
		'es-es': "Minccino",
		'it-it': "Minccino",
		'pt-br': "Minccino",
		'de-de': "Picochilla"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Covet",
				'fr-fr': "Implore",
				'es-es': "Antojo",
				'it-it': "Supplica",
				'pt-br': "Cobiça",
				'de-de': "Bezirzer"
			},
			effect: {
				'en-us': "Your opponent reveals his or her hand. Choose a card you find there and put it on the bottom of your opponent's deck.",
				'fr-fr': "Votre adversaire montre sa main. Choisissez une carte que vous y trouvez et mettez-la en dessous du deck de votre adversaire.",
				'es-es': "Tu rival enseña las cartas de su mano. Elige 1 carta que encuentres entre ellas y ponla en la parte inferior de la baraja de tu rival.",
				'it-it': "Il tuo avversario mostra le carte che ha in mano. Scegline una e mettila in fondo al suo mazzo.",
				'pt-br': "Seu oponente revela a própria mão. Escolha um card que encontrar e coloque-o embaixo do baralho do seu oponente.",
				'de-de': "Dein Gegner deckt seine Handkarten auf. Wähle 1 dieser Karten und lege sie unter das Deck deines Gegners."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Last Resort",
				'fr-fr': "Dernier Recours",
				'es-es': "Última Baza",
				'it-it': "Ultimascelta",
				'pt-br': "Último Recurso",
				'de-de': "Zuflucht"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
				'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
				'pt-br': "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
				'de-de': "Wirf 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
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

	description: {
		'en-us': "Cinccino's body is coated in a special oil that helps it deflect attacks, such as punches.",
	},

	thirdParty: {
		cardmarket: 289909,
		tcgplayer: 117861
	}
}

export default card
