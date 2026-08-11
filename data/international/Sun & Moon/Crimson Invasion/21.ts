import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Mamoswine",
		'fr-fr': "Mammochon",
		'es-es': "Mamoswine",
		'it-it': "Mamoswine",
		'pt-br': "Mamoswine",
		'de-de': "Mamutel"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		473,
	],

	hp: 180,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Piloswine",
		'fr-fr': "Cochignon",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double Stomp",
				'fr-fr': "Double Écrasement",
				'es-es': "Pisotón Doble",
				'it-it': "Doppio Pestone",
				'pt-br': "Pisoteada Dupla",
				'de-de': "Doppelstampfer"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 more damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 30 puntos de daño más por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 30 danni in più ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 30 pontos de dano a mais para cada cara.",
				'de-de': "Wirf 2 Münzen. Diese Attacke fügt 30 Schadenspunkte mehr pro Kopf zu."
			},
			damage: "60+",

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Forceful Tackle",
				'fr-fr': "Charge Énergique",
				'es-es': "Placaje Contundente",
				'it-it': "Maniere Forti",
				'pt-br': "Ofensiva Forçada",
				'de-de': "Resoluter Rempler"
			},
			effect: {
				'en-us': "You may put up to 9 damage counters on this Pokémon. This attack does 10 more damage for each damage counter you placed in this way.",
				'fr-fr': "Vous pouvez placer jusqu’à 9 marqueurs de dégâts sur ce Pokémon. Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé de cette façon.",
				'es-es': "Puedes poner hasta 9 contadores de daño en este Pokémon. Este ataque hace 10 puntos de daño más por cada contador de daño que hayas colocado de esta manera.",
				'it-it': "Puoi mettere fino a nove segnalini danno su questo Pokémon. Questo attacco infligge 10 danni in più per ogni segnalino danno che hai messo in questo modo.",
				'pt-br': "Você pode colocar até 9 contadores de dano neste Pokémon. Este ataque causa 10 pontos de dano a mais para cada contador de dano colocado desta forma.",
				'de-de': "Du kannst bis zu 9 Schadensmarken auf dieses Pokémon legen. Diese Attacke fügt 10 Schadenspunkte mehr mal der Anzahl der auf diese Weise platzierten Schadensmarken zu."
			},
			damage: "90+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "A frozen Mamoswine was dug from ice dating back 10,000 years. This Pokémon has been around a long, long, long time.",
	},

	thirdParty: {
		cardmarket: 311871,
		tcgplayer: 149042
	}
}

export default card
