import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Regieleki V",
		de: "Regieleki V",
		es: "Regieleki V",
		pt: "Regieleki V",
		it: "Regieleki V",
		en: "Regieleki V"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Lightning"],

		name: {
			fr: "Éclair Échange",
			de: "Tauschblitz",
			es: "Rayo Cambiante",
			pt: "Raio de Substituição",
			it: "Fulmine di Scambio",
			en: "Switching Bolt"
		},

		effect: {
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
			es: "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			it: "Scambia questo Pokémon con uno della tua panchina.",
			en: "Switch this Pokémon with 1 of your Benched Pokémon."
		},

		damage: 30
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			fr: "Mur Lumineux",
			de: "Elektrowand",
			es: "Muro Relámpago",
			pt: "Muralha Relampejante",
			it: "Elettromuro",
			en: "Lightning Wall"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 100 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 100 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			es: "Durante el próximo turno de tu rival, los ataques hacen 100 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			pt: "Durante o próximo turno do seu oponente, este Pokémon receberá 100 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 100 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			en: "During your opponent's next turn, this Pokémon takes 100 less damage from attacks (after applying Weakness and Resistance)."
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 682984
	}
}

export default card