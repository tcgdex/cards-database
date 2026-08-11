import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Bronzong",
		'fr-fr': "Archéodong",
		'es-es': "Bronzong",
		'it-it': "Bronzong",
		'pt-br': "Bronzong",
		'de-de': "Bronzong"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		437,
	],

	hp: 110,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Bronzor",
		'fr-fr': "Archéomire",
		'es-es': "Bronzor",
		'it-it': "Bronzor",
		'pt-br': "Bronzor",
		'de-de': "Bronzel"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Pain Amplifier",
				'fr-fr': "Amplificateur de Douleur",
				'es-es': "Amplificador de Dolor",
				'it-it': "Aumentapena",
				'pt-br': "Ampliador da Dor",
				'de-de': "Schmerzverstärker"
			},
			effect: {
				'en-us': "Put 3 damage counters on each of your opponent's Pokémon that has any damage counters on it.",
				'fr-fr': "Placez 3 marqueurs de dégâts sur chacun des Pokémon de votre adversaire ayant au moins un marqueur de dégâts.",
				'es-es': "Pon 3 contadores de daño en cada uno de los Pokémon de tu rival que tenga algún contador de daño sobre él.",
				'it-it': "Metti tre segnalini danno su ciascuno dei Pokémon del tuo avversario che abbia dei segnalini danno.",
				'pt-br': "Coloque 3 contadores de danos em cada um dos Pokémon do seu oponente que possua contadores de danos.",
				'de-de': "Lege auf jedes Pokémon deines Gegners, auf dem bereits mindestens 1 Schadensmarke liegt, 3 Schadensmarken."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Knock Away",
				'fr-fr': "Asticotage",
				'es-es': "Derribar",
				'it-it': "Scaraventa",
				'pt-br': "Jogar Longe",
				'de-de': "Zurückschlagen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
				'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 20 de danos adicionais.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 20 weitere Schadenspunkte zu."
			},
			damage: "70+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Ancient people believed that petitioning Bronzong for rain was the way to make crops grow.",
	},

	thirdParty: {
		cardmarket: 286342,
		tcgplayer: 107215
	}
}

export default card
