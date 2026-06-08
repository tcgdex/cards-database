import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Mega Pyroar ex",
		fr: "Méga-Némélios-ex",
		es: "Mega-Pyroar ex",
		'es-mx': "Mega-Pyroar ex",
		de: "Mega-Pyroleo-ex",
		it: "Mega Pyroar-ex",
		pt: "Mega Pyroar ex"
	},

	illustrator: "Keisuke Azuma",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [668],
	hp: 340,
	types: ["Fire"],

	evolveFrom: {
		en: "Litleo"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Ferocious Bellow",
			fr: "Grognement Féroce",
			es: "Gruñido Feroz",
			'es-mx': "Rugido Feroz",
			de: "Wildes Kläffen",
			it: "Ruggitorvo",
			pt: "Rugido Feroz"
		},

		cost: ["Fire", "Colorless"],
		damage: 80,

		effect: {
			en: "During your opponent's next turn, attacks used by the Defending Pokémon do 50 less damage (before applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur infligent 50 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			es: "Durante el próximo turno de tu rival, los ataques usados por el Pokémon Defensor hacen 50 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			'es-mx': "Durante el próximo turno de tu rival, los ataques usados por el Pokémon Defensor hacen 50 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			de: "Während des nächsten Zuges deines Gegners fügen die vom Verteidigenden Pokémon eingesetzten Attacken 50 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden).",
			it: "Durante il prossimo turno del tuo avversario, gli attacchi usati dal Pokémon difensore infliggono 50 danni in meno, prima di aver applicato debolezza e resistenza.",
			pt: "Durante o próximo turno do seu oponente, os ataques usados pelo Pokémon Defensor causarão 50 pontos de dano a menos (antes de aplicar Fraqueza e Resistência)."
		}
	}, {
		name: {
			en: "Fiery Big Bang",
			fr: "Big Bang Ardent",
			es: "Big Bang Abrasador",
			'es-mx': "Big Bang Calcinante",
			de: "Feuriger Urknall",
			it: "Big Bang Incandescente",
			pt: "Big Bang Incinerador"
		},

		cost: ["Fire", "Fire", "Colorless"],
		damage: "290-",

		effect: {
			en: "This attack does 10 less damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 10 dégâts de moins pour chaque marqueur de dégâts sur ce Pokémon.",
			es: "Este ataque hace 10 puntos de daño menos por cada contador de daño en este Pokémon.",
			'es-mx': "Este ataque hace 10 puntos de daño menos por cada contador de daño en este Pokémon.",
			de: "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte weniger zu.",
			it: "Questo attacco infligge 10 danni in meno per ogni segnalino danno presente su questo Pokémon.",
			pt: "Este ataque causa 10 pontos de dano a menos para cada contador de dano neste Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693519,
		cardmarket: 886407
	}
}

export default card