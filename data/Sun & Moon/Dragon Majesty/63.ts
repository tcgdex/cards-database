import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Wela Volcano Park",
		fr: "Parc Volcanique",
		es: "Área Volcánica del Wela",
		it: "Parco del Vulcano Wela",
		pt: "Vulcão Wela",
		de: "Wela Vulkanpark"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Lorsqu’un joueur lance une pièce pour l’État Spécial Brûlé entre chaque tour, cet État Spécial n’est pas ôté, même si le résultat est face.",
		en: "Whenever a player flips a coin for the Special Condition Burned between turns, that Special Condition isn’t removed even if the result is heads.",
		es: "Cada vez que 1 jugador lance 1 moneda para la Condición Especial de Quemado entre turnos, esa Condición Especial no se elimina incluso si sale cara.",
		it: "Ogni volta che un giocatore lancia una moneta per la condizione speciale di bruciato tra un turno e l’altro, quella condizione speciale non viene rimossa anche se esce testa.",
		pt: "Sempre que um jogador jogar uma moeda para a Condição Especial de Queimado entre as vezes de jogar, aquela Condição Especial não é removida, mesmo que o resultado seja cara.",
		de: "Jedes Mal, wenn ein Spieler zwischen den Zügen eine Münze für den Speziellen Zustand Verbrennung wirft, verliert jener Spezielle Zustand seine Wirkung nicht, auch wenn das Ergebnis Kopf ist. Diese Karte bleibt im Spiel, wenn du sie spielst. Lege diese Karte ab, sobald eine weitere Stadionkarte ins Spiel kommt. Wenn eine andere Karte mit dem gleichen Namen im Spiel ist, kannst du diese Karte nicht spielen."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 363534,
		tcgplayer: 175493
	}
}

export default card
