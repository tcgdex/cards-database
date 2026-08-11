import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [764],
	set: Set,

	name: {
		'en-us': "Comfey",
		'fr-fr': "Guérilande",
		'es-es': "Comfey",
		'it-it': "Comfey",
		'pt-br': "Comfey",
		'de-de': "Curelei"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Flower Shower",
			'fr-fr': "Pluie de Fleurs",
			'es-es': "Lluvia de Flores",
			'it-it': "Doccia Floreale",
			'pt-br': "Fluxo de Flores",
			'de-de': "Blumenschauer"
		},

		effect: {
			'en-us': "Each player draws 3 cards.",
			'fr-fr': "Chaque joueur pioche 3 cartes.",
			'es-es': "Cada jugador roba 3 cartas.",
			'it-it': "Ciascun giocatore pesca tre carte.",
			'pt-br': "Cada jogador compra 3 cartas.",
			'de-de': "Jeder Spieler zieht 3 Karten."
		}
	}, {
		cost: ["Psychic"],

		name: {
			'en-us': "Play Rough",
			'fr-fr': "Câlinerie",
			'es-es': "Carantoña",
			'it-it': "Carineria",
			'pt-br': "Jogo Duro",
			'de-de': "Knuddler"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785917,
				tcgplayer: 567289
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785917,
				tcgplayer: 567289
			}
		},
	],

	illustrator: "saino misaki",

}

export default card
