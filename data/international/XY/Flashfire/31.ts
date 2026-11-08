import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Avalugg",
		'fr-fr': "Séracrawl",
		'es-es': "Avalugg",
		'it-it': "Avalugg",
		'pt-br': "Avalugg",
		'de-de': "Arktilas"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		713,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Bergmite",
		'fr-fr': "Grelaçon",
		'es-es': "Bergmite",
		'it-it': "Bergmite",
		'pt-br': "Bergmite",
		'de-de': "Arktip"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Frost Barrier",
				'fr-fr': "Barrière de Givre",
				'es-es': "Barrera Gélida",
				'it-it': "Gelobarriera",
				'pt-br': "Barreira Congelada",
				'de-de': "Frostschutz"
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				'es-es': "Durante el próximo turno de tu rival, cualquier daño hecho a este Pokémon por ataques se reduce en 20 (después de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il prossimo turno del tuo avversario, i danni inflitti a questo Pokémon dagli attacchi sono ridotti di 20, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, qualquer dano causado a este Pokémon por ataques será reduzido em 20 (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Während des nächsten Zuges deines Gegners wird Schaden, der diesem Pokémon durch Angriffe zugefügt wird, um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Shatter",
				'fr-fr': "Fracas",
				'es-es': "Fragmentar",
				'it-it': "Frantumare",
				'pt-br': "Estilhaçar",
				'de-de': "Zertrümmern"
			},
			effect: {
				'en-us': "Discard any Stadium card in play.",
				'fr-fr': "Défaussez toute carte Stade en jeu.",
				'es-es': "Descarta cualquier carta de Estadio en juego.",
				'it-it': "Scarta una carta Stadio in gioco.",
				'pt-br': "Descarte qualquer card de Estádio em jogo.",
				'de-de': "Lege eine beliebige Stadionkarte aus dem Spiel auf den Ablagestapel."
			},
			damage: 90,

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
		'en-us': "Its ice-covered body is as hard as steel. Its cumbersome frame crushes anything that stands in its way.",
	},

	thirdParty: {
		cardmarket: 281514,
		tcgplayer: 91164
	}
}

export default card
