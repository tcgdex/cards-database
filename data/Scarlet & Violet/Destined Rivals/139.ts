import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Forretress",
		fr: "Foretress",
		de: "Forstellka",
		it: "Forretress",
		es: "Forretress",
		pt: "Forretress"
	},

	illustrator: "Lee HyunJung",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Continuous Spin",
			fr: "Rotation Continue",
			de: "Dauerdrehung",
			it: "Eternogiro",
			es: "Giro Continuo",
			pt: "Giro Contínuo"
		},

		effect: {
			en: "Flip a coin until you get tails. This attack does 50 damage for each heads.",
			fr: "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 50 dégâts pour chaque côté face.",
			de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 50 Schadenspunkte pro Kopf zu.",
			it: "Lancia una moneta finché non esce croce. Questo attacco infligge 50 danni ogni volta che esce testa.",
			es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 50 puntos de daño por cada cara.",
			pt: "Jogue uma moeda até sair coroa. Este ataque causa 50 pontos de dano para cada cara."
		},

		damage: "50×"
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Rolling Shell",
			fr: "Coquille Roulante",
			de: "Rollende Schale",
			it: "Guscio Rotolante",
			es: "Caparazón Rodante",
			pt: "Concha Rolante"
		},

		effect: {
			en: "During your opponent's next turn, this Pokémon takes 50 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 50 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 50 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 50 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			es: "Durante el próximo turno de tu rival, los ataques hacen 50 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			pt: "Durante o próximo turno do seu oponente, este Pokémon receberá 50 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência)."
		},

		damage: 90
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card