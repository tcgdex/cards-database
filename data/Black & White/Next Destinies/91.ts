import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Skyarrow Bridge",
		fr: "Pont Sagiciel",
		es: "Puente Saeta",
		it: "Ponte Freccialuce",
		pt: "Ponte Flecha Celeste",
		de: "Himmelspfeilbrücke"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Le coût de Retraite de chaque Pokémon de base en jeu est diminué de Colorless.",
		en: "The Retreat Cost of each Basic Pokémon in play is Colorless less.",
		es: "El Coste de Retirada de cada Pokémon Básico en juego es de Colorless menos.",
		it: "Il costo di ritirata di ciascun Pokémon Base in gioco è ridotto di Colorless.",
		pt: "O Custo para Recuar de cada Pokémon Básico em jogo é de um Colorless a menos.",
		de: "Die Rückzugskosten aller Basis-Pokémon im Spiel verringern sich um {C}. Diese Karte bleibt im Spiel, wenn du sie spielst. Lege diese Karte ab, sobald eine weitere Stadionkarte ins Spiel kommt. Wenn eine andere Karte mit dem gleichen Namen im Spiel ist, kannst du diese Karte nicht spielen."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 280316,
		tcgplayer: 89285
	}
}

export default card
