import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [227],
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
	hp: 120,
	types: ["Metal"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Megumi Higuchi",

	description: {
		en: "Its body is draped in steel armor. It looks heavy, but it can fly at speeds of up to 185 miles an hour!"
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Steel Wing",
			fr: "Aile d'Acier",
			de: "Stahlflügel",
			es: "Ala de Acero",
			pt: "Asa de Aço",
			it: "Alacciaio"
		},

		damage: 30,

		effect: {
			en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			es: "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			pt: "Durante o próximo turno do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza."
		}
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			en: "Slicing Blade",
			fr: "Lame Tranchante",
			de: "Schwertschneide",
			es: "Cuchilla Cortante",
			pt: "Lâmina Fatiante",
			it: "Affettalama"
		},

		damage: 110
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card