import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Hydreigon",
		'fr-fr': "Trioxhydre",
		'es-es': "Hydreigon",
		'it-it': "Hydreigon",
		'pt-br': "Hydreigon",
		'de-de': "Trikephalo"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		635,
	],

	hp: 150,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Zweilous",
		'fr-fr': "Diamat",
		'es-es': "Zweilous",
		'it-it': "Zweilous",
		'pt-br': "Zweilous",
		'de-de': "Duodino"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Cruel Fang",
				'fr-fr': "Croc Cruel",
				'es-es': "Colmillo Cruel",
				'it-it': "Zanne Crudeli",
				'pt-br': "Canino Cruel",
				'de-de': "Grausame Fänge"
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done by attacks from the Defending Pokémon is reduced by 40 (before applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, tous les dégâts infligés par les attaques du Pokémon Défenseur sont réduits de 40 (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Durante el próximo turno de tu rival, cualquier daño infligido por ataques del Pokémon Defensor se reduce en 40 (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il prossimo turno del tuo avversario, i danni inflitti dagli attacchi del Pokémon difensore sono ridotti di 40, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, qualquer dano causado por ataques do Pokémon Defensor será reduzido em 40 (antes da aplicação de Fraqueza e Resistência).",
				'de-de': "Während des nächsten Zuges deines Gegners wird Schaden, der durch Angriffe des Verteidigenden Pokémon zugefügt wird, um 40 Schadenspunkte reduziert (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 40,

		},
		{
			cost: [
				"Psychic",
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Dark Burn",
				'fr-fr': "Brûlure Obscure",
				'es-es': "Quemadura Oscura",
				'it-it': "Bruciabuio",
				'pt-br': "Queimadura Escura",
				'de-de': "Schwarzer Brand"
			},
			effect: {
				'en-us': "Discard as many Darkness Energy attached to your Pokémon as you like. This attack does 50 damage times the amount of Darkness Energy you discarded in this way.",
				'fr-fr': "Défaussez autant d'Énergies Darkness attachées à vos Pokémon que vous voulez. Cette attaque inflige 50 dégâts multipliés par le nombre de cartes Énergie Darkness défaussées de cette façon.",
				'es-es': "Descarta tantas Energías Darkness unidas a tus Pokémon como quieras. Este ataque hace 50 puntos de daño por cada Energía Darkness que hayas descartado de esta manera.",
				'it-it': "Scarta a piacimento le Energie Darkness assegnate ai tuoi Pokémon. Questo attacco infligge 50 danni per ogni carta Energia Darkness che hai scartato in questo modo.",
				'pt-br': "Descarte tantas Energias Darkness ligadas aos seus Pokémon quanto desejar. Este ataque causa 50 de danos vezes a quantidade de cards de Energia Darkness descartados desta forma.",
				'de-de': "Lege beliebig viele an deine Pokémon angelegte Darkness-Energien auf deinen Ablagestapel. Dieser Angriff fügt 50 Schadenspunkte für jede der auf diese Weise abgelegte Darkness-Energie zu."
			},
			damage: "50×",

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It responds to movement by attacking. This scary, three-headed Pokémon devours everything in its path!",
	},

	thirdParty: {
		cardmarket: 291547,
		tcgplayer: 121212
	}
}

export default card
