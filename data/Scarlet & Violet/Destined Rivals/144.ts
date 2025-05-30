import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Chansey",
		fr: "Leveinard",
		de: "Chaneira",
		it: "Chansey",
		es: "Chansey",
		pt: "Chansey"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Pound",
			fr: "Écras'Face",
			de: "Klaps",
			it: "Botta",
			es: "Destructor",
			pt: "Pancada"
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Egg Rolling",
			fr: "Œuf Roulant",
			de: "Eierkullern",
			it: "Rotoluova",
			es: "Huevo Rodante",
			pt: "Rolando Ovos"
		},

		effect: {
			en: "Flip a coin until you get tails. This attack does 60 damage for each heads.",
			fr: "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 60 dégâts pour chaque côté face.",
			de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 60 Schadenspunkte pro Kopf zu.",
			it: "Lancia una moneta finché non esce croce. Questo attacco infligge 60 danni ogni volta che esce testa.",
			es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 60 puntos de daño por cada cara.",
			pt: "Jogue uma moeda até sair coroa. Este ataque causa 60 pontos de dano para cada cara."
		},

		damage: "60×"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card