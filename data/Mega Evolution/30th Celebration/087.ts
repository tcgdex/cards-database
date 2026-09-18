import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "Females are more sensitive to smells than males. While foraging, they'll use their whiskers to check wind direction and stay downwind of predators."
	},

	name: {
		en: "Nidoran♀",
		fr: "Nidoran♀",
		de: "Nidoran♀",
		es: "Nidoran♀",
		it: "Nidoran♀",
		'es-mx': "Nidoran♀"
	},

	illustrator: "Taira Akitsu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [29],
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Growl",
			fr: "Rugissement",
			de: "Heuler",
			es: "Gruñido",
			it: "Ruggito",
			'es-mx': "Gruñido"
		},

		effect: {
			en: "During your opponent's next turn, attacks used by the Defending Pokémon do 30 less damage <em>(before applying Weakness and Resistance)</em>.",
			fr: "Pendant le prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur infligent 30 dégâts de moins <em>(avant application de la Faiblesse et de la Résistance)</em>.",
			de: "Während des nächsten Zuges deines Gegners fügen die vom Verteidigenden Pokémon eingesetzten Attacken 30 Schadenspunkte weniger zu <em>(bevor Schwäche und Resistenz verrechnet werden)</em>.",
			es: "Durante el próximo turno de tu rival, los ataques usados por el Pokémon Defensor hacen 30 puntos de daño menos <em>(antes de aplicar Debilidad y Resistencia)</em>.",
			it: "Durante il prossimo turno del tuo avversario, gli attacchi usati dal Pokémon difensore infliggono 30 danni in meno, <em>prima di aver applicato debolezza e resistenza</em>.",
			'es-mx': "Durante el próximo turno de tu rival, los ataques usados por el Pokémon Defensor hacen 30 puntos de daño menos <em>(antes de aplicar Debilidad y Resistencia)</em>."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
			de: "Kopfnuss",
			es: "Golpe Cabeza",
			it: "Bottintesta",
			'es-mx': "Golpe Cabeza"
		},

		damage: 10,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907694,
				tcgplayer: 716483
			}
		}
	],
}

export default card