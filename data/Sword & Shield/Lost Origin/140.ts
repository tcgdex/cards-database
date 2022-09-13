import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Porygon",
		fr: "Porygon",
		es: "Porygon",
		it: "Porygon",
		pt: "Porygon",
		de: "Porygon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Branch Calculation",
			fr: "Calcul de Branchement",
			es: "Cálculo Desestabilizador",
			it: "Calcolo Diramazione",
			pt: "Cálculos Meticulosos",
			de: "Zweigkalkulation"
		},

		effect: {
			en: "Look at the top 4 cards of either player's deck and put them back in any order.",
			fr: "Regardez les 4 cartes du dessus du deck de l'un des joueurs, puis replacez-les dans l'ordre de votre choix.",
			es: "Mira las 4 primeras cartas de la baraja de cualquiera de los jugadores y vuelve a ponerlas en la parte superior de esa baraja en el orden que quieras.",
			it: "Guarda le prime quattro carte del mazzo di uno dei giocatori e rimettile a posto nell'ordine che preferisci.",
			pt: "Olhe as 4 cartas de cima do baralho de qualquer um dos jogadores e coloque-as de volta em qualquer ordem.",
			de: "Schau dir die obersten 4 Karten des Decks eines der beiden Spieler an und lege sie in beliebiger Reihenfolge zurück auf sein Deck."
		}
	}, {
		cost: ["Colorless"],

		name: {
			en: "Beam",
			fr: "Rayon",
			es: "Transmisión",
			it: "Raggio",
			pt: "Feixe",
			de: "Strahl"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	}
}

export default card