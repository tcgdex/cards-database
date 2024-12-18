import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [297],
	set: Set,

	name: {
		fr: "Hariyama",
		en: "Hariyama",
		es: "Hariyama",
		it: "Hariyama",
		pt: "Hariyama",
		de: "Hariyama"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Entraînement à la Cogne",
			en: "Arm Thrust Practice",
			es: "Entrenamiento Empuje",
			it: "Allenamento Sberletese",
			pt: "Treinar Propulsão de Braço",
			de: "Armwurf-Training"
		},

		effect: {
			fr: "Tous vos Pokémon subissent 10 dégâts de moins provenant des attaques des Pokémon de votre adversaire (après application de la Faiblesse et de la Résistance).",
			en: "All of your Pokémon take 10 less damage from attacks from your opponent's Pokémon (after applying Weakness and Resistance).",
			es: "Los ataques de los Pokémon de tu rival hacen 10 puntos de daño menos a todos tus Pokémon (después de aplicar Debilidad y Resistencia).",
			it: "I tuoi Pokémon subiscono 10 danni in meno dagli attacchi dei Pokémon del tuo avversario, dopo aver applicato debolezza e resistenza.",
			pt: "Todos os seus Pokémon recebem 10 pontos de dano a menos de ataques dos Pokémon do seu oponente (depois de aplicar Fraqueza e Resistência).",
			de: "Allen deinen Pokémon werden durch Attacken von Pokémon deines Gegners 10 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			fr: "Baffe Accélérée",
			en: "Rocket Slap",
			es: "Bofetada Vertiginosa",
			it: "Razzosberla",
			pt: "Tapa Foguete",
			de: "Raketenklatscher"
		},

		damage: 120
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	evolveFrom: {
		en: "Makuhita",
		fr: "Makuhita",
		es: "Makuhita",
		it: "Makuhita",
		pt: "Makuhita",
		de: "Makuhita"
	}
}

export default card