import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		en: "Comfey",
		fr: "Guérilande",
		es: "Comfey",
		it: "Comfey",
		pt: "Comfey",
		de: "Curelei"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Flower Shower",
			fr: "Pluie de Fleurs",
			es: "Lluvia de Flores",
			it: "Doccia Floreale",
			pt: "Fluxo de Flores",
			de: "Blumenschauer"
		},

		effect: {
			en: "Each player draws 3 cards.",
			fr: "Chaque joueur pioche 3 cartes.",
			es: "Cada jugador roba 3 cartas.",
			it: "Ciascun giocatore pesca tre carte.",
			pt: "Cada jogador compra 3 cartas.",
			de: "Jeder Spieler zieht 3 Karten."
		}
	}, {
		cost: ["Psychic"],

		name: {
			en: "Play Rough",
			fr: "Câlinerie",
			es: "Carantoña",
			it: "Carineria",
			pt: "Jogo Duro",
			de: "Knuddler"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
			pt: "Jogue uma moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card