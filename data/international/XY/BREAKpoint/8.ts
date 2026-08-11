import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Lilligant",
		'fr-fr': "Fragilady",
		'es-es': "Lilligant",
		'it-it': "Lilligant",
		'pt-br': "Lilligant",
		'de-de': "Dressella"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		549,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Petilil",
		'fr-fr': "Chlorobule",
		'es-es': "Petilil",
		'it-it': "Petilil",
		'pt-br': "Petilil",
		'de-de': "Lilminip"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Boo-Hoo",
				'fr-fr': "Snif",
				'es-es': "Buaaa",
				'it-it': "Bua",
				'pt-br': "Choradeira",
				'de-de': "Geplärre"
			},
			effect: {
				'en-us': "If your opponent attaches an Energy card from his or her hand to the Defending Pokémon during his or her next turn, that Pokémon will be Asleep.",
				'fr-fr': "Si votre adversaire attache une carte Énergie de sa main au Pokémon Défenseur pendant son prochain tour, le Pokémon ciblé sera Endormi.",
				'es-es': "Si tu rival une 1 carta de Energía de su mano al Pokémon Defensor durante su próximo turno, ese Pokémon pasa a estar Dormido.",
				'it-it': "Se il tuo avversario assegna una carta Energia dalla sua mano al Pokémon difensore durante il suo prossimo turno, quel Pokémon viene addormentato.",
				'pt-br': "Se o seu oponente ligar um card de Energia da mão dele(a) ao Pokémon Defensor durante a próxima vez dele(a) jogar, aquele Pokémon ficará Adormecido.",
				'de-de': "Wenn dein Gegner während seines nächsten Zuges 1 Energie von seiner Hand an das Verteidigende Pokémon anlegt, schläft jenes Pokémon ein."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Leaf Slice",
				'fr-fr': "Tranche Feuille",
				'es-es': "Tajo de Hojas",
				'it-it': "Tranciafoglia",
				'pt-br': "Retalho de Folhas",
				'de-de': "Blattschneide"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 30 puntos de daño por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 30 de danos vezes o número de caras.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Even veteran Trainers face a challenge in getting its beautiful flower to bloom. This Pokémon is popular with celebrities.",
	},

	thirdParty: {
		cardmarket: 288183,
		tcgplayer: 111511
	}
}

export default card
