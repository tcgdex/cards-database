import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [600],
	set: Set,

	name: {
		en: "Klang",
		fr: "Clic",
		de: "Kliklak",
		it: "Klang",
		pt: "Klang",
		es: "Klang",
		'es-mx': "Klang"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],
	evolveFrom: {
		en: "Klink",
		fr: "Tic",
		de: "Klikk",
		it: "Klink",
		pt: "Klink",
		es: "Klink",
		"es-mx": "Klink"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			en: "Hard Gears",
			fr: "Engrenages Robustes",
			de: "Robustes Getriebe",
			it: "Ingranaggi Resistenti",
			pt: "Engrenagens Sólidas",
			es: "Engranajes Resistentes",
			'es-mx': "Engranajes Resistentes"
		},

		effect: {
			en: "During your opponent's next turn, this Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 20 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 20 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Durante o próximo turno do seu oponente, este Pokémon receberá 20 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			es: "Durante el próximo turno de tu rival, los ataques hacen 20 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'es-mx': "Durante el próximo turno de tu rival, los ataques hacen 20 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia)."
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836037
	}
}

export default card