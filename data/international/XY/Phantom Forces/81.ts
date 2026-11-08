import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Blissey",
		'fr-fr': "Leuphorie",
		'es-es': "Blissey",
		'it-it': "Blissey",
		'pt-br': "Blissey",
		'de-de': "Heiteira"
	},

	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		242,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Chansey",
		'fr-fr': "Leveinard",
		'es-es': "Chansey",
		'it-it': "Chansey",
		'pt-br': "Chansey",
		'de-de': "Chaneira"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tender Vengeance",
				'fr-fr': "Douce Vengeance",
				'es-es': "Dulce Venganza",
				'it-it': "Tenerivalsa",
				'pt-br': "Doce Vingança",
				'de-de': "Süße Rache"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage times the number of damage counters on each of your Benched Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts multipliés par le nombre de marqueurs de dégâts placés sur chacun de vos Pokémon de Banc.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 10 puntos de daño por cada contador de daño en cada uno de tus Pokémon en Banca.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 10 danni per ogni segnalino danno presente sui tuoi Pokémon in panchina.",
				'pt-br': "Jogue uma moeda. Se sair cara, esse ataque causará 10 de danos vezes o número de contadores de danos em cada um dos seus Pokémon no Banco.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 10 Schadenspunkte für jede Schadensmarke auf den Pokémon auf deiner Bank zu."
			},
			damage: "10×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Charge Dash",
				'fr-fr': "Attaque Précipitée",
				'es-es': "Carga Arrojada",
				'it-it': "Corsacarica",
				'pt-br': "Rasgo Feroz",
				'de-de': "Sturmlauf"
			},
			effect: {
				'en-us': "You may do 20 more damage. If you do, this Pokémon does 20 damage to itself.",
				'fr-fr': "Vous pouvez infliger 20 dégâts supplémentaires. Dans ce cas, ce Pokémon s'inflige 20 dégâts.",
				'es-es': "Puedes hacer 20 puntos de daño más. Si lo haces, este Pokémon se hace 20 puntos de daño a sí mismo.",
				'it-it': "Puoi infliggere 20 danni in più. Se lo fai, questo Pokémon infligge 20 danni a se stesso.",
				'pt-br': "Você pode causar 20 de danos adicionais. Se você fizer isso, o Pokémon causará 20 de danos a ele mesmo.",
				'de-de': "Du kannst mit diesem Angriff 20 weitere Schadenspunkte zufügen. Wenn du das machst, fügt dieses Pokémon sich selbst 20 Schadenspunkte zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "The eggs it lays are filled with happiness. Eating even one bite will bring a smile to anyone.",
	},

	thirdParty: {
		cardmarket: 281887,
		tcgplayer: 94649
	}
}

export default card
