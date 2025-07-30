import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Hisuian Qwilfish",
		fr: "Qwilfish de Hisui",
		es: "Qwilfish de Hisui",
		it: "Qwilfish di Hisui",
		pt: "Qwilfish de Hisui",
		de: "Hisui-Baldorfish"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Spiny Rush",
			fr: "Assaut Épineux",
			es: "Envite Espinoso",
			it: "Aculeoraffica",
			pt: "Arremetida Espinhosa",
			de: "Stachelsturm"
		},

		effect: {
			en: "Flip a coin until you get tails. This attack does 10 damage for each heads.",
			fr: "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 10 dégâts pour chaque côté face.",
			es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 10 puntos de daño por cada cara.",
			it: "Lancia una moneta finché non esce croce. Questo attacco infligge 10 danni ogni volta che esce testa.",
			pt: "Jogue 1 moeda até sair coroa. Este ataque causa 10 pontos de dano para cada cara.",
			de: "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
		},

		damage: "10×"
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 658709
	}
}

export default card