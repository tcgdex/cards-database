import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Bronzong",
		'fr-fr': "Archéodong",
		'es-es': "Bronzong",
		'es-mx': "Bronzong",
		'de-de': "Bronzong",
		'it-it': "Bronzong",
		'pt-br': "Bronzong"
	},

	illustrator: "Uta",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [437],
	hp: 130,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Bronzor"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Gentle Slap",
			'fr-fr': "Gifle Douce",
			'es-es': "Bofetada Gentil",
			'es-mx': "Cachetadita",
			'de-de': "Sanfter Hieb",
			'it-it': "Schiaffetto",
			'pt-br': "Tapinha"
		},

		cost: ["Metal"],

		damage: 40
	}, {
		name: {
			'en-us': "Metal Block",
			'fr-fr': "Bloc Métal",
			'es-es': "Bloqueo Metálico",
			'es-mx': "Bloqueo Metálico",
			'de-de': "Metallblock",
			'it-it': "Metalblocco",
			'pt-br': "Bloco de Metal"
		},

		cost: ["Metal", "Metal", "Colorless"],

		damage: 120,

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes 100 less damage from attacks from Evolution Pokémon (after applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 100 dégâts de moins provenant des attaques de Pokémon Évolutifs (après application de la Faiblesse et de la Résistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques de los Pokémon Evolución hacen 100 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'es-mx': "Durante el próximo turno de tu rival, este Pokémon recibe 100 puntos de daño menos de ataques de Pokémon Evolución (después de aplicar Debilidad y Resistencia).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken von Entwicklungs-Pokémon 100 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 100 danni in meno dagli attacchi dei Pokémon Evoluzione, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 100 pontos de dano a menos de ataques de Pokémon de Evolução (depois de aplicar Fraqueza e Resistência)."
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
