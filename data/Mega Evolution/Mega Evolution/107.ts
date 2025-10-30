import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Buneary",
		fr: "Laporeille",
		de: "Haspiror",
		it: "Buneary",
		es: "Buneary",
		pt: "Buneary",
		'es-mx': "Buneary"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",
	dexId: [427],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Charm",
			fr: "Charme",
			de: "Charme",
			it: "Fascino",
			es: "Encanto",
			pt: "Encantar",
			'es-mx': "Encanto"
		},

		effect: {
			en: "During your opponent's next turn, attacks used by the Defending Pokémon do 20 less damage (before applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur infligent 20 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			de: "Während des nächsten Zuges deines Gegners fügen die vom Verteidigenden Pokémon eingesetzten Attacken 20 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden).",
			it: "Durante il prossimo turno del tuo avversario, gli attacchi usati dal Pokémon difensore infliggono 20 danni in meno, prima di aver applicato debolezza e resistenza.",
			es: "Durante el próximo turno de tu rival, los ataques usados por el Pokémon Defensor hacen 20 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			pt: "Durante o próximo turno do seu oponente, os ataques usados pelo Pokémon Defensor causarão 20 pontos de dano a menos (antes de aplicar Fraqueza e Resistência).",
			'es-mx': "Durante el próximo turno de tu rival, los ataques usados por el Pokémon Defensor hacen 20 puntos de daño menos (antes de aplicar Debilidad y Resistencia)."
		}
	}, {
		cost: ["Colorless"],

		name: {
			en: "Skip",
			fr: "Sautiller",
			de: "Hüpfer",
			it: "Saltello",
			es: "Saltito",
			pt: "Saltitar",
			'es-mx': "Saltito"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654446,
		cardmarket: 851178
	}
}

export default card