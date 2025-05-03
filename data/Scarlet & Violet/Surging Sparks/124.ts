import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Skarmory",
		fr: "Airmure",
		es: "Skarmory",
		it: "Skarmory",
		pt: "Skarmory",
		de: "Panzaeron"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			en: "Steel Wing",
			fr: "Ailes d'Acier",
			es: "Ala de Acero",
			it: "Alacciaio",
			pt: "Asa de Aço",
			de: "Stahlflügel"
		},

		effect: {
			en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			es: "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Durante o próximo turno do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	}
}

export default card
