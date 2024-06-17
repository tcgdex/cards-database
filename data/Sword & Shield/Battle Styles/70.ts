import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [105],
	set: Set,

	name: {
		en: "Marowak",
		fr: "Ossatueur",
		es: "Marowak",
		it: "Marowak",
		pt: "Marowak",
		de: "Knogga"
	},

	illustrator: "Narumi Sato",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	evolveFrom: {
		en: "Cubone",
		fr: "Osselait",
		es: "Cubone",
		it: "Cubone",
		pt: "Cubone",
		de: "Tragosso"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Battle Armor",
			fr: "Armurbaston",
			es: "Armadura Batalla",
			it: "Lottascudo",
			pt: "Armadura de Batalha",
			de: "Kampfpanzer"
		},

		effect: {
			en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			es: "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			it: "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Este Pokémon recebe 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			de: "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		name: {
			en: "Bonemerang",
			fr: "Osmerang",
			es: "Huesomerang",
			it: "Ossomerang",
			pt: "Ossomerangue",
			de: "Knochmerang"
		},

		effect: {
			en: "Flip 2 coins. This attack does 90 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 90 dégâts pour chaque côté face.",
			es: "Lanza 2 monedas. Este ataque hace 90 puntos de daño por cada cara.",
			it: "Lancia due volte una moneta. Questo attacco infligge 90 danni ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 90 pontos de dano para cada cara.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 90 Schadenspunkte pro Kopf zu."
		},

		damage: "90×",
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "They thump their bones rhythmically to communicate among themselves. There are nearly 50 different rhythmic patterns."
	}
}

export default card