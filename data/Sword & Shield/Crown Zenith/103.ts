import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Duraludon V",
		fr: "Duralugon V",
		es: "Duraludon V",
		it: "Duraludon V",
		pt: "Duraludon V",
		de: "Duraludon V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Fighting", "Metal"],

		name: {
			en: "Metal Claw",
			fr: "Griffe Acier",
			es: "Garra Metal",
			it: "Ferrartigli",
			pt: "Garra de Metal",
			de: "Metallklaue"
		},

		damage: 70
	}, {
		cost: ["Fighting", "Metal", "Metal"],

		name: {
			en: "Breaking Swipe",
			fr: "Abattage",
			es: "Vasto Impacto",
			it: "Vastoimpatto",
			pt: "Impacto Vasto",
			de: "Breitseite"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon's attacks do 30 less damage (before applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur infligent 30 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			es: "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor hacen 30 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			it: "Durante il prossimo turno del tuo avversario, gli attacchi del Pokémon difensore infliggono 30 danni in meno, prima di aver applicato debolezza e resistenza.",
			pt: "Durante o próximo turno do seu oponente, os ataques do Pokémon Defensor causarão 30 pontos de dano a menos (antes de aplicar Fraqueza e Resistência).",
			de: "Während des nächsten Zuges deines Gegners fügen die Attacken des Verteidigenden Pokémon 30 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden)."
		},

		damage: 140
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card