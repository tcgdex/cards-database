import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Duraludon V",
		fr: "Duralugon V",
		es: "Duraludon V",
		it: "Duraludon V",
		pt: "Duraludon V",
		de: "Duraludon V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 220,
	types: ["Dragon"],
	stage: "Basic",
	illustrator: "PLANETA Mochizuki",

	attacks: [{
		name: {
			en: "Metal Claw",
			fr: "Griffe Acier",
			es: "Garra Metal",
			it: "Ferrartigli",
			pt: "Metal Claw",
			de: "Metallklaue"
		},

		damage: 70,
		cost: ["Fighting", "Metal"]
	}, {
		name: {
			en: "Breaking Swipe",
			fr: "Abattage",
			es: "Vasto Impacto",
			it: "Vastoimpatto",
			pt: "Breaking Swipe",
			de: "Breitseite"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon's attacks do 30 less damage (before applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur infligent 30 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			es: "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor hacen 30 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			it: "Durante il prossimo turno del tuo avversario, gli attacchi del Pokémon difensore infliggono 30 danni in meno, prima di aver applicato debolezza e resistenza.",
			pt: "During your opponent's next turn, the Defending Pokémon's attacks do 30 less damage (before applying Weakness and Resistance).",
			de: "Während des nächsten Zuges deines Gegners fügen die Attacken des Verteidigenden Pokémon 30 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden)."
		},

		damage: 140,
		cost: ["Fighting", "Metal", "Metal"]
	}],

	retreat: 2,
	dexId: [884],
	regulationMark: "E",
	suffix: "V",

	thirdParty: {
		cardmarket: 574170,
		tcgplayer: 246748
	}
}

export default card
