import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Vigoroth",
		'fr-fr': "Vigoroth",
		'es-es': "Vigoroth",
		'it-it': "Vigoroth",
		'pt-br': "Vigoroth",
		'de-de': "Muntier"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		288,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Slakoth",
		'fr-fr': "Parecool",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fury Swipes",
				'fr-fr': "Combo-Griffe",
				'es-es': "Golpes Furia",
				'it-it': "Sfuriate",
				'pt-br': "Ataque de Fúria",
				'de-de': "Kratzfurie"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 20 damage for each heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 3 monedas. Este ataque hace 20 puntos de daño por cada cara.",
				'it-it': "Lancia tre volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
				'pt-br': "Jogue 3 moedas. Este ataque causa 20 pontos de dano para cada cara.",
				'de-de': "Wirf 3 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rage",
				'fr-fr': "Frénésie",
				'es-es': "Furia",
				'it-it': "Ira",
				'pt-br': "Ira",
				'de-de': "Raserei"
			},
			effect: {
				'en-us': "This attack does 10 more damage for each damage counter on this Pokémon.",
				'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
				'es-es': "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon.",
				'it-it': "Questo attacco infligge 10 danni in più per ogni segnalino danno presente su questo Pokémon.",
				'pt-br': "Este ataque causa 10 pontos de dano a mais para cada contador de dano neste Pokémon.",
				'de-de': "Diese Attacke fügt 10 Schadenspunkte mehr mal der Anzahl der Schadensmarken auf diesem Pokémon zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its stress level rises if it cannot keep moving constantly. Too much stress makes it feel sick.",
	},

	thirdParty: {
		cardmarket: 361353,
		tcgplayer: 170943
	}
}

export default card
