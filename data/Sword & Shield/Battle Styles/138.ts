import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Tower of Waters",
		fr: "Tour de l'Eau",
		es: "Torre de las Aguas",
		it: "Torre Acqua",
		pt: "Torre das Águas",
		de: "Turm des Wassers"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "The Retreat Cost of each Rapid Strike Pokémon in play (both yours and your opponent's) is ColorlessColorless less.",
		fr: "Le Coût de Retraite de chaque Pokémon Mille Poings en jeu (les vôtres et ceux de votre adversaire) est diminué de ColorlessColorless.",
		es: "El Coste de Retirada de cada Pokémon Golpe Fluido en juego (tanto tuyos como de tu rival) es de ColorlessColorless menos.",
		it: "Il costo di ritirata di ciascun Pokémon Colpo Rapido in gioco, sia tuoi che del tuo avversario, è ridotto di ColorlessColorless.",
		pt: "O custo de Recuo de cada Pokémon Golpe Fluido em jogo (seus e do seu oponente) é ColorlessColorless a menos.",
		de: "Die Rückzugskosten aller Fließender-Angriff-Pokémon im Spiel (deiner und der deines Gegners) verringern sich um ColorlessColorless."
	},

	regulationMark: "E",
	trainerType: "Stadium",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
