import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [52],
	set: Set,

	name: {
		en: "Galarian Meowth",
		fr: "Miaouss de Galar",
		es: "Meowth de Galar",
		it: "Meowth di Galar",
		pt: "Meowth de Galar",
		de: "Galar-Mauzi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "0313",

	description: {
		en: "These daring Pokémon have coins on their foreheads. Darker coins are harder, and harder coins garner more respect among Meowth."
	},

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Growl",
			fr: "Rugissement",
			de: "Heuler",
			es: "Gruñido",
			pt: "Rosnadura",
			it: "Ruggito"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon's attacks do 20 less damage (before applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur infligent 20 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			de: "Während des nächsten Zuges deines Gegners fügen die Attacken des Verteidigenden Pokémon 20 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden).",
			es: "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor hacen 20 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			pt: "Durante o próximo turno do seu oponente, os ataques do Pokémon Defensor causarão 20 pontos de dano a menos (antes de aplicar Fraqueza e Resistência).",
			it: "Durante il prossimo turno del tuo avversario, gli attacchi del Pokémon difensore infliggono 20 danni in meno, prima di aver applicato debolezza e resistenza."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Slash",
			fr: "Tranche",
			de: "Schlitzer",
			es: "Cuchillada",
			pt: "Talho",
			it: "Lacerazione"
		},

		damage: 20
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582808
	}
}

export default card