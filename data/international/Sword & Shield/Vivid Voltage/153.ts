import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		'en-us': "League Staff",
		'fr-fr': "Employés de la Ligue",
		'es-es': "Empleados de Liga",
		'it-it': "Staff Lega",
		'pt-br': "Staff da Liga",
		'de-de': "Liga-Angestellte"
	},

	illustrator: "Emi Ando",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Draw 2 cards. If Wyndon Stadium is in play, draw 2 more cards.",
		'fr-fr': "Piochez 2 cartes. Si Stade de Winscor est en jeu, piochez 2 cartes supplémentaires.",
		'es-es': "Roba 2 cartas. Si Estadio de Puntera está en juego, roba 2 cartas más.",
		'it-it': "Pesca due carte. Se c'è in gioco Stadio di Goalwick, pesca altre due carte.",
		'pt-br': "Compre 2 cartas. Se Estádio de Wyndon estiver em jogo, compre mais 2 cartas.",
		'de-de': "Ziehe 2 Karten. Wenn Score-Stadion im Spiel ist, ziehe 2 Karten mehr."
	},

	trainerType: "Supporter",
	regulationMark: "D",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 512475,
				tcgplayer: 226507
			}
		},
		{
			type: 'reverse',
			stamp: ['staff'],
			thirdParty: {
				tcgplayer: 226507
			}
		},
	],
}

export default card
