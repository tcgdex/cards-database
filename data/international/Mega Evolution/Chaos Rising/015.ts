import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,


	name: {
		'en-us': "Mega Pyroar ex",
		'fr-fr': "Méga-Némélios-ex",
		'es-es': "Mega-Pyroar ex",
		'es-mx': "Mega-Pyroar ex",
		'de-de': "Mega-Pyroleo-ex",
		'it-it': "Mega Pyroar-ex",
		'pt-br': "Mega Pyroar ex"
	},

	illustrator: "Keisuke Azuma",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [668],
	hp: 340,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Litleo"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Ferocious Bellow",
			'fr-fr': "Grognement Féroce",
			'es-es': "Gruñido Feroz",
			'es-mx': "Rugido Feroz",
			'de-de': "Wildes Kläffen",
			'it-it': "Ruggitorvo",
			'pt-br': "Rugido Feroz"
		},

		cost: ["Fire", "Colorless"],
		damage: 80,

		effect: {
			'en-us': "During your opponent's next turn, attacks used by the Defending Pokémon do 50 less damage (before applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur infligent 50 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques usados por el Pokémon Defensor hacen 50 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			'es-mx': "Durante el próximo turno de tu rival, los ataques usados por el Pokémon Defensor hacen 50 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			'de-de': "Während des nächsten Zuges deines Gegners fügen die vom Verteidigenden Pokémon eingesetzten Attacken 50 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden).",
			'it-it': "Durante il prossimo turno del tuo avversario, gli attacchi usati dal Pokémon difensore infliggono 50 danni in meno, prima di aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, os ataques usados pelo Pokémon Defensor causarão 50 pontos de dano a menos (antes de aplicar Fraqueza e Resistência)."
		}
	}, {
		name: {
			'en-us': "Fiery Big Bang",
			'fr-fr': "Big Bang Ardent",
			'es-es': "Big Bang Abrasador",
			'es-mx': "Big Bang Calcinante",
			'de-de': "Feuriger Urknall",
			'it-it': "Big Bang Incandescente",
			'pt-br': "Big Bang Incinerador"
		},

		cost: ["Fire", "Fire", "Colorless"],
		damage: "290-",

		effect: {
			'en-us': "This attack does 10 less damage for each damage counter on this Pokémon.",
			'fr-fr': "Cette attaque inflige 10 dégâts de moins pour chaque marqueur de dégâts sur ce Pokémon.",
			'es-es': "Este ataque hace 10 puntos de daño menos por cada contador de daño en este Pokémon.",
			'es-mx': "Este ataque hace 10 puntos de daño menos por cada contador de daño en este Pokémon.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte weniger zu.",
			'it-it': "Questo attacco infligge 10 danni in meno per ogni segnalino danno presente su questo Pokémon.",
			'pt-br': "Este ataque causa 10 pontos de dano a menos para cada contador de dano neste Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 886407,
				tcgplayer: 693519
			}
		},
	],
}

export default card
