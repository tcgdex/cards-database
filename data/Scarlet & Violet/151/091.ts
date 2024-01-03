import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	set: Set,

	name: {
		fr: "Crustabri",
		en: "Cloyster",
		es: "Cloyster",
		it: "Cloyster",
		pt: "Cloyster",
		de: "Austos"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			fr: "Recharge Protectrice",
			en: "Protect Charge",
			es: "Carga Protectora",
			it: "Carica Protettiva",
			pt: "Carga Protetora",
			de: "Schützender Sturmangriff"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 80 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			en: "During your opponent's next turn, this Pokémon takes 80 less damage from attacks (after applying Weakness and Resistance).",
			es: "Durante el próximo turno de tu rival, los ataques hacen 80 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 80 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Durante o próximo turno do seu oponente, este Pokémon receberá 80 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 80 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 80
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card