import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Luvdisc",
		fr: "Lovdisc",
		es: "Luvdisc",
		it: "Luvdisc",
		pt: "Luvdisc",
		de: "Liebiskus"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Matching Look",
			fr: "Apparence Assortie",
			es: "A la Par",
			it: "Copia Look",
			pt: "Visual Combinado",
			de: "Partnerlook"
		},

		effect: {
			en: "Each player reveals the top 2 cards of their deck, then draws those cards.",
			fr: "Chaque joueur montre les 2 cartes du dessus de son deck, puis pioche ces cartes.",
			es: "Cada jugador enseña las 2 primeras cartas de su baraja y luego roba esas cartas.",
			it: "Ciascun giocatore mostra le prime due carte del proprio mazzo, quindi pesca quelle carte.",
			pt: "Cada jogador revela as 2 cartas de cima do próprio baralho e, em seguida, compra aquelas cartas.",
			de: "Jeder Spieler zeigt die obersten 2 Karten seines Decks und zieht anschließend jene Karten."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			it: "Azione",
			pt: "Investida",
			de: "Tackle"
		},

		damage: 30
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