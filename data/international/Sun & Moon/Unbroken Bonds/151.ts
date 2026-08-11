import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Dodrio",
		'fr-fr': "Dodrio",
		'es-es': "Dodrio",
		'it-it': "Dodrio",
		'pt-br': "Dodrio",
		'de-de': "Dodri"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		85,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Doduo",
		'fr-fr': "Doduo",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tri Attack",
				'fr-fr': "Triplattaque",
				'es-es': "Triataque",
				'it-it': "Tripletta",
				'pt-br': "Triataque",
				'de-de': "Triplette"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 60 damage for each heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 60 dégâts pour chaque côté face.",
				'es-es': "Lanza 3 monedas. Este ataque hace 60 puntos de daño por cada cara.",
				'it-it': "Lancia tre volte una moneta. Questo attacco infligge 60 danni ogni volta che esce testa.",
				'pt-br': "Jogue 3 moedas. Este ataque causa 60 pontos de dano para cada cara.",
				'de-de': "Wirf 3 Münzen. Diese Attacke fügt 60 Schadenspunkte pro Kopf zu."
			},
			damage: "60×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Accelerating Stab",
				'fr-fr': "Poignard Accélérateur",
				'es-es': "Puñalada Aceleradora",
				'it-it': "Pugnalata Rapida",
				'pt-br': "Estocada Aceleratória",
				'de-de': "Beschleunigter Stich"
			},
			effect: {
				'en-us': "This Pokémon can’t use Accelerating Stab during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas utiliser Poignard Accélérateur pendant votre prochain tour.",
				'es-es': "Este Pokémon no puede usar Puñalada Aceleradora durante tu próximo turno.",
				'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Pugnalata Rapida.",
				'pt-br': "Este Pokémon não poderá usar Estocada Aceleratória durante a sua próxima vez de jogar.",
				'de-de': "Dieses Pokémon kann Beschleunigter Stich während deines nächsten Zuges nicht einsetzen."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "An enemy that takes its eyes off any of the three heads—even for a second—will get pecked severely.",
	},

	thirdParty: {
		cardmarket: 372437,
		tcgplayer: 189253
	}
}

export default card
