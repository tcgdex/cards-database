import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [388],
	set: Set,

	name: {
		en: "Grotle",
		fr: "Boskara",
		es: "Grotle",
		it: "Grotle",
		pt: "Grotle",
		de: "Chelcarain"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Cut",
			fr: "Coupe",
			es: "Corte",
			it: "Taglio",
			pt: "Cortar",
			de: "Zerschneider"
		},

		damage: 20
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Ramming Shell",
			fr: "Impact Carapace",
			es: "Embestida Caparazón",
			it: "Guscio Paraurti",
			pt: "Colisão de Carapaça",
			de: "Rammende Schale"
		},

		effect: {
			en: "During your opponent's next turn, this Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			es: "Durante el próximo turno de tu rival, los ataques hacen 20 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 20 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Durante o próximo turno do seu oponente, este Pokémon receberá 20 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 50
	}],

	retreat: 4,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	}
}

export default card