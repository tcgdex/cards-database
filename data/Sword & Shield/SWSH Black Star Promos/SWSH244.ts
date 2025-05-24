import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Flambino",
		de: "Hopplo",
		es: "Scorbunny",
		pt: "Scorbunny",
		it: "Scorbunny",
		en: "Scorbunny"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			fr: "Ruée Ardente",
			de: "Feuriger Sprint",
			es: "Carrera Ígnea",
			pt: "Arremetida Chamuscante",
			it: "Scatto Fiammante",
			en: "Flaring Dash"
		},

		effect: {
			fr: "Lancez une pièce jusqu'à obtenir un côté pile. Pour chaque côté face, piochez une carte.",
			de: "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Ziehe pro Kopf 1 Karte.",
			es: "Lanza 1 moneda hasta que salga cruz. Por cada cara, roba 1 carta.",
			pt: "Jogue 1 moeda até sair coroa. Para cada cara, compre 1 carta.",
			it: "Lancia una moneta finché non esce croce. Ogni volta che esce testa, pesca una carta.",
			en: "Flip a coin until you get tails. For each heads, draw a card."
		}
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			fr: "Flamboiement",
			de: "Flackern",
			es: "Llama",
			pt: "Chama",
			it: "Fiammata",
			en: "Flare"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "E",

	description: {
		en: "It has special pads on the backs of its feet, and one on its nose. Once it's raring to fight, these pads radiate tremendous heat."
	}
}

export default card