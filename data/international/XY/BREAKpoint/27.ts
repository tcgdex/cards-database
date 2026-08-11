import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "M Gyarados EX",
		'fr-fr': "M-Léviator EX",
		'es-es': "M-Gyarados EX",
		'it-it': "M Gyarados EX",
		'pt-br': "M-Gyarados EX",
		'de-de': "M-Garados EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		130,
	],

	hp: 240,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Gyarados-EX",
		'fr-fr': "Léviator-EX",
		'es-es': "Gyarados-EX",
		'it-it': "Gyarados-EX",
		'pt-br': "Gyarados-EX",
		'de-de': "Garados-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Blast Geyser",
				'fr-fr': "Geyser Explosif",
				'es-es': "Explosión Géiser",
				'it-it': "Geyser Esplosivo",
				'pt-br': "Gêiser Explosivo",
				'de-de': "Gewaltiger Geysir"
			},
			effect: {
				'en-us': "You may do 20 more damage for each Water Energy attached to this Pokémon. If you do, discard the top 2 cards of your deck.",
				'fr-fr': "Vous pouvez infliger 20 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon. Dans ce cas, défaussez les 2 cartes du dessus de votre deck.",
				'es-es': "Puedes hacer 20 puntos de daño más por cada Energía Water unida a este Pokémon. Si lo haces, descarta las 2 primeras cartas de tu baraja.",
				'it-it': "Puoi infliggere 20 danni in più per ogni Energia Water assegnata a questo Pokémon. Se lo fai, scarta le prime due carte del tuo mazzo.",
				'pt-br': "Você pode causar 20 de danos adicionais para cada Energia Water ligada a este Pokémon. Se fizer isso, descarte os 2 cards de cima do seu baralho.",
				'de-de': "Du kannst mit diesem Angriff 20 weitere Schadenspunkte für jede an dieses Pokémon angelegte Water-Energie zufügen. Wenn du das machst, lege die obersten 2 Karten deines Decks auf deinen Ablagestapel."
			},
			damage: "120+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,
	suffix: "EX",

	thirdParty: {
		tcgplayer: 111532
	}
}

export default card
