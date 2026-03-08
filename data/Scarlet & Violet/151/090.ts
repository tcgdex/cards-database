import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [90],
	set: Set,

	name: {
		fr: "Kokiyas",
		en: "Shellder",
		es: "Shellder",
		it: "Shellder",
		pt: "Shellder",
		de: "Muschas"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			fr: "Pression Coquille",
			en: "Shell Press",
			es: "Presión Caparazón",
			it: "Gusciopressa",
			pt: "Compressão de Concha",
			de: "Schalendruck"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			es: "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Durante o próximo turno do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Nelnal",

	thirdParty: {
		cardmarket: 733607
	}
}

export default card