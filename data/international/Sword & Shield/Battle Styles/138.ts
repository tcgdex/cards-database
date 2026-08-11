import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Tower of Waters",
		'fr-fr': "Tour de l'Eau",
		'es-es': "Torre de las Aguas",
		'it-it': "Torre Acqua",
		'pt-br': "Torre das Águas",
		'de-de': "Turm des Wassers"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "The Retreat Cost of each Rapid Strike Pokémon in play (both yours and your opponent's) is ColorlessColorless less.",
		'fr-fr': "Le Coût de Retraite de chaque Pokémon Mille Poings en jeu (les vôtres et ceux de votre adversaire) est diminué de ColorlessColorless.",
		'es-es': "El Coste de Retirada de cada Pokémon Golpe Fluido en juego (tanto tuyos como de tu rival) es de ColorlessColorless menos.",
		'it-it': "Il costo di ritirata di ciascun Pokémon Colpo Rapido in gioco, sia tuoi che del tuo avversario, è ridotto di ColorlessColorless.",
		'pt-br': "O custo de Recuo de cada Pokémon Golpe Fluido em jogo (seus e do seu oponente) é ColorlessColorless a menos.",
		'de-de': "Die Rückzugskosten aller Fließender-Angriff-Pokémon im Spiel (deiner und der deines Gegners) verringern sich um ColorlessColorless."
	},

	regulationMark: "E",
	trainerType: "Stadium",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 546056,
				tcgplayer: 234145
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 546056,
				tcgplayer: 234145
			}
		},
	],
}

export default card
