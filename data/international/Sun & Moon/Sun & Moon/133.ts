import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Team Skull Grunt",
		'fr-fr': "Sbire de la Team Skull",
		'es-es': "Recluta del Team Skull",
		'it-it': "Recluta del Team Skull",
		'pt-br': "Recruta da Equipe Skull",
		'de-de': "Team Skull-Rüpel"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Votre adversaire dévoile sa main. Défaussez-en 2 cartes Énergie.",
		'en-us': "Your opponent reveals their hand. Discard 2 Energy cards from it.",
		'es-es': "Tu rival enseña las cartas de su mano. Descarta 2 de sus cartas de Energía.",
		'it-it': "Il tuo avversario mostra le carte che ha in mano. Scarta due carte Energia tra esse.",
		'pt-br': "Seu oponente revela a própria mão. Descarte 2 cartas de Energia da mão dele(a).",
		'de-de': "Dein Gegner zeigt dir seine Handkarten. Lege 2 Energiekarten aus der Hand deines Gegners auf seinen Ablagestapel."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 295446,
		tcgplayer: 127005
	}
}

export default card
