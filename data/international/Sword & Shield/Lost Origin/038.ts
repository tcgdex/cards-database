import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [370],
	set: Set,

	name: {
		'en-us': "Luvdisc",
		'fr-fr': "Lovdisc",
		'es-es': "Luvdisc",
		'it-it': "Luvdisc",
		'pt-br': "Luvdisc",
		'de-de': "Liebiskus"
	},

	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Matching Look",
			'fr-fr': "Apparence Assortie",
			'es-es': "A la Par",
			'it-it': "Copia Look",
			'pt-br': "Visual Combinado",
			'de-de': "Partnerlook"
		},

		effect: {
			'en-us': "Each player reveals the top 2 cards of their deck, then draws those cards.",
			'fr-fr': "Chaque joueur montre les 2 cartes du dessus de son deck, puis pioche ces cartes.",
			'es-es': "Cada jugador enseña las 2 primeras cartas de su baraja y luego roba esas cartas.",
			'it-it': "Ciascun giocatore mostra le prime due carte del proprio mazzo, quindi pesca quelle carte.",
			'pt-br': "Cada jogador revela as 2 cartas de cima do próprio baralho e, em seguida, compra aquelas cartas.",
			'de-de': "Jeder Spieler zeigt die obersten 2 Karten seines Decks und zieht anschließend jene Karten."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'it-it': "Azione",
			'pt-br': "Investida",
			'de-de': "Tackle"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674048,
				tcgplayer: 283912
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674048,
				tcgplayer: 283912
			}
		},
	],
}

export default card
