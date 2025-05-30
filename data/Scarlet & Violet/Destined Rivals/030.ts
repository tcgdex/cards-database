import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Growlithe",
		fr: "Caninos",
		de: "Fukano",
		it: "Growlithe",
		es: "Growlithe",
		pt: "Growlithe"
	},

	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Relentless Flames",
			fr: "Flammes Incessantes",
			de: "Unermüdliche Flammen",
			it: "Fiammeperenni",
			es: "Llamas Implacables",
			pt: "Chamas Incansáveis"
		},

		effect: {
			en: "Flip a coin until you get tails. This attack does 30 damage for each heads.",
			fr: "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 30 dégâts pour chaque côté face.",
			de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu.",
			it: "Lancia una moneta finché non esce croce. Questo attacco infligge 30 danni ogni volta che esce testa.",
			es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 30 puntos de daño por cada cara.",
			pt: "Jogue uma moeda até sair coroa. Este ataque causa 30 pontos de dano para cada cara."
		},

		damage: "30×"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card