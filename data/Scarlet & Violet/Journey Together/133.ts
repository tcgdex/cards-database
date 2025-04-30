import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Hop's Rookidee",
		fr: "Minisange de Nabil",
		es: "Rookidee de Paul",
		de: "Hops Meikro",
		it: "Rookidee di Hop",
		pt: "Rookidee do Lupo",
		'es-mx': "Rookidee de Paul"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Intimidating Stare",
			fr: "Yeux Intimidants",
			es: "Mirada Intimidante",
			de: "Einschüchterndes Starren",
			it: "Sguardo Intimidatorio",
			pt: "Encarada",
			'es-mx': "Mirada Intimidante"
		},

		effect: {
			en: "During your opponent's next turn, attacks used by the Defending Pokémon do 20 less damage (before applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur infligent 20 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			es: "Durante el próximo turno de tu rival, los ataques usados por el Pokémon Defensor hacen 20 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			de: "Während des nächsten Zuges deines Gegners fügen die vom Verteidigenden Pokémon eingesetzten Attacken 20 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden).",
			it: "Durante il prossimo turno del tuo avversario, gli attacchi usati dal Pokémon difensore infliggono 20 danni in meno, prima di aver applicato debolezza e resistenza.",
			pt: "Durante o próximo turno do seu oponente, os ataques usados pelo Pokémon Defensor causarão 20 pontos de dano a menos (antes de aplicar Fraqueza e Resistência).",
			'es-mx': "Durante el próximo turno de tu rival, los ataques usados por el Pokémon Defensor hacen 20 puntos de daño menos (antes de aplicar Debilidad y Resistencia)."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Peck",
			fr: "Picpic",
			es: "Picotazo",
			de: "Pikser",
			it: "Beccata",
			pt: "Bicada",
			'es-mx': "Picotazo"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
