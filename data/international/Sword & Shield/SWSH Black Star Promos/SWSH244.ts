import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [813],
	set: Set,

	name: {
		'fr-fr': "Flambino",
		'de-de': "Hopplo",
		'es-es': "Scorbunny",
		'pt-br': "Scorbunny",
		'it-it': "Scorbunny",
		'en-us': "Scorbunny"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'fr-fr': "Ruée Ardente",
			'de-de': "Feuriger Sprint",
			'es-es': "Carrera Ígnea",
			'pt-br': "Arremetida Chamuscante",
			'it-it': "Scatto Fiammante",
			'en-us': "Flaring Dash"
		},

		effect: {
			'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Pour chaque côté face, piochez une carte.",
			'de-de': "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Ziehe pro Kopf 1 Karte.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Por cada cara, roba 1 carta.",
			'pt-br': "Jogue 1 moeda até sair coroa. Para cada cara, compre 1 carta.",
			'it-it': "Lancia una moneta finché non esce croce. Ogni volta che esce testa, pesca una carta.",
			'en-us': "Flip a coin until you get tails. For each heads, draw a card."
		}
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Flamboiement",
			'de-de': "Flackern",
			'es-es': "Llama",
			'pt-br': "Chama",
			'it-it': "Fiammata",
			'en-us': "Flare"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",

	description: {
		'en-us': "It has special pads on the backs of its feet, and one on its nose. Once it's raring to fight, these pads radiate tremendous heat."
	},

	thirdParty: {
		cardmarket: 427086
	}
}

export default card
