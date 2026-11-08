import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [105],
	set: Set,

	name: {
		'en-us': "Marowak",
		'fr-fr': "Ossatueur",
		'es-es': "Marowak",
		'it-it': "Marowak",
		'pt-br': "Marowak",
		'de-de': "Knogga"
	},

	illustrator: "Narumi Sato",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Cubone",
		'fr-fr': "Osselait",
		'es-es': "Cubone",
		'it-it': "Cubone",
		'pt-br': "Cubone",
		'de-de': "Tragosso"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Battle Armor",
			'fr-fr': "Armurbaston",
			'es-es': "Armadura Batalla",
			'it-it': "Lottascudo",
			'pt-br': "Armadura de Batalha",
			'de-de': "Kampfpanzer"
		},

		effect: {
			'en-us': "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Este Pokémon recebe 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Bonemerang",
			'fr-fr': "Osmerang",
			'es-es': "Huesomerang",
			'it-it': "Ossomerang",
			'pt-br': "Ossomerangue",
			'de-de': "Knochmerang"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 90 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 90 dégâts pour chaque côté face.",
			'es-es': "Lanza 2 monedas. Este ataque hace 90 puntos de daño por cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 90 danni ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 90 pontos de dano para cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 90 Schadenspunkte pro Kopf zu."
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


	stage: "Stage1",

	description: {
		'en-us': "They thump their bones rhythmically to communicate among themselves. There are nearly 50 different rhythmic patterns."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545466,
				tcgplayer: 234246
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545466,
				tcgplayer: 234246
			}
		},
	],
}

export default card
