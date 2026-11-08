import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Psychic's Third Eye",
		'fr-fr': "Troisième Œil du Kinésiste",
		'es-es': "Tercer Ojo de Médium",
		'it-it': "Terzo Occhio del Sensitivo",
		'pt-br': "Terceiro Olho do Psíquico",
		'de-de': "Psychos siebter Sinn"
	},

	illustrator: "Yusuke Ohmura",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Votre adversaire montre sa main.\n\nDéfaussez autant de cartes que vous voulez de votre main. Ensuite, piochez autant de cartes.",
		'en-us': "Your opponent reveals his or her hand.\n\nDiscard as many cards as you like from your hand. Then, draw that many cards.",
		'es-es': "Tu rival enseña las cartas de su mano.Descarta tantas cartas como quieras de tu mano. Después, roba ese mismo número de cartas.",
		'it-it': "Il tuo avversario mostra le carte che ha in mano.Scarta tutte le carte che vuoi dalla tua mano. Poi pesca lo stesso numero di carte.",
		'pt-br': "Seu oponente revela a própria mão.Descarte tantos cards quanto quiser da sua mão. Em seguida, compre aquele mesmo número de cards.",
		'de-de': "Dein Gegner deckt seine Handkarten auf.Lege beliebig viele Karten von deiner Hand auf deinen Ablagestapel. Ziehe anschließend dieselbe Anzahl Karten."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 288283,
		tcgplayer: 111638
	}
}

export default card
