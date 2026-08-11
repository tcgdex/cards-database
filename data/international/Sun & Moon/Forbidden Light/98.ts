import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Diggersby",
		'fr-fr': "Excavarenne",
		'es-es': "Diggersby",
		'it-it': "Diggersby",
		'pt-br': "Diggersby",
		'de-de': "Grebbit"
	},

	illustrator: "Mina Nakai",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		660,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Bunnelby",
		'fr-fr': "Sapereau",
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
				'en-us': "Mountaintop Mining",
				'fr-fr': "Mine des Sommets",
				'es-es': "Minería Cima",
				'it-it': "Miniera di Montagna",
				'pt-br': "Mineração Montanhosa",
				'de-de': "Gipfelabbau"
			},
			effect: {
				'en-us': "You may do 40 more damage. If you do, discard the top 2 cards of your deck.",
				'fr-fr': "Vous pouvez infliger 40 dégâts supplémentaires. Dans ce cas, défaussez les 2 cartes du dessus de votre deck.",
				'es-es': "Puedes hacer 40 puntos de daño más. Si lo haces, descarta las 2 primeras cartas de tu baraja.",
				'it-it': "Puoi infliggere 40 danni in più. Se lo fai, scarta le prime due carte del tuo mazzo.",
				'pt-br': "Você pode causar 40 pontos de dano a mais. Se fizer isto, descarte as 2 primeiras cartas do seu baralho.",
				'de-de': "Du kannst 40 Schadenspunkte mehr zufügen. Wenn du das machst, lege die obersten 2 Karten von deinem Deck auf deinen Ablagestapel."
			},
			damage: "60+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rock Cannon",
				'fr-fr': "Canon à Pierres",
				'es-es': "Cañón Roca",
				'it-it': "Rocciocannone",
				'pt-br': "Canhão de Rochas",
				'de-de': "Felskanone"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 80 damage for each heads.",
				'fr-fr': "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 80 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 80 puntos de daño por cada cara.",
				'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 80 danni ogni volta che esce testa.",
				'pt-br': "Jogue 1 moeda até sair coroa. Este ataque causa 80 pontos de dano para cada cara.",
				'de-de': "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Diese Attacke fügt 80 Schadenspunkte pro Kopf zu."
			},
			damage: "80×",

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
		'en-us': "As powerful as an excavator, its ears can reduce dense bedrock to rubble. When it's finished digging, it lounges lazily.",
	},

	thirdParty: {
		cardmarket: 355611,
		tcgplayer: 165760
	}
}

export default card
