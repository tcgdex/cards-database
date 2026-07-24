import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Bronzong",
		fr: "Archéodong",
		es: "Bronzong",
		'es-mx': "Bronzong",
		de: "Bronzong",
		it: "Bronzong",
		pt: "Bronzong"
	},

	illustrator: "Uta",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [437],
	hp: 130,
	types: ["Metal"],

	evolveFrom: {
		en: "Bronzor"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Gentle Slap",
			fr: "Gifle Douce",
			es: "Bofetada Gentil",
			'es-mx': "Cachetadita",
			de: "Sanfter Hieb",
			it: "Schiaffetto",
			pt: "Tapinha"
		},

		cost: ["Metal"],

		damage: 40
	}, {
		name: {
			en: "Metal Block",
			fr: "Bloc Métal",
			es: "Bloqueo Metálico",
			'es-mx': "Bloqueo Metálico",
			de: "Metallblock",
			it: "Metalblocco",
			pt: "Bloco de Metal"
		},

		cost: ["Metal", "Metal", "Colorless"],

		damage: 120,

		effect: {
			en: "During your opponent's next turn, this Pokémon takes 100 less damage from attacks from Evolution Pokémon (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 100 dégâts de moins provenant des attaques de Pokémon Évolutifs (après application de la Faiblesse et de la Résistance).",
			es: "Durante el próximo turno de tu rival, los ataques de los Pokémon Evolución hacen 100 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'es-mx': "Durante el próximo turno de tu rival, este Pokémon recibe 100 puntos de daño menos de ataques de Pokémon Evolución (después de aplicar Debilidad y Resistencia).",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken von Entwicklungs-Pokémon 100 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 100 danni in meno dagli attacchi dei Pokémon Evoluzione, dopo aver applicato debolezza e resistenza.",
			pt: "Durante o próximo turno do seu oponente, este Pokémon receberá 100 pontos de dano a menos de ataques de Pokémon de Evolução (depois de aplicar Fraqueza e Resistência)."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],
	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895849,
				tcgplayer: 704821
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895849,
				tcgplayer: 704821
			}
		},
	],
}

export default card
