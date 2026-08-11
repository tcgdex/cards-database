import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Tauros",
		'fr-fr': "Tauros",
		'es-es': "Tauros",
		'it-it': "Tauros",
		'pt-br': "Tauros",
		'de-de': "Tauros"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		128,
	],

	hp: 110,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Take Down",
				'fr-fr': "Bélier",
				'es-es': "Derribo",
				'it-it': "Riduttore",
				'pt-br': "Desmantelar",
				'de-de': "Bodycheck"
			},
			effect: {
				'en-us': "This Pokémon does 10 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige 10 dégâts.",
				'es-es': "Este Pokémon se hace 10 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge 10 danni a se stesso.",
				'pt-br': "Este Pokémon causa 10 de danos a ele mesmo.",
				'de-de': "Dieses Pokémon fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Seething Anger",
				'fr-fr': "Furax",
				'es-es': "Enfado Hirviente",
				'it-it': "Furia Sfrenata",
				'pt-br': "Fúria Fervente",
				'de-de': "Schäumende Wut"
			},
			effect: {
				'en-us': "Flip a coin for each damage counter on this Pokémon. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez une pièce pour chaque marqueur de dégâts placé sur ce Pokémon. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 1 moneda por cada contador de daño en este Pokémon. Este ataque hace 30 puntos de daño por cada cara.",
				'it-it': "Lancia una moneta per ogni segnalino danno presente su questo Pokémon. Questo attacco infligge 30 danni ogni volta che esce testa.",
				'pt-br': "Jogue uma moeda para cada contador de danos neste Pokémon. Esse ataque causa 30 de danos vezes o número de caras.",
				'de-de': "Wirf für jede an dieses Pokémon angelegte Energie 1 Münze. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "After heightening its will to fight by whipping itself with its three tails, it charges at full speed.",
	},

	thirdParty: {
		cardmarket: 281437,
		tcgplayer: 89767
	}
}

export default card
