import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Lugia EX",
		'fr-fr': "Lugia EX",
		'es-es': "Lugia EX",
		'it-it': "Lugia EX",
		'pt-br': "Lugia EX",
		'de-de': "Lugia EX"
	},

	illustrator: "Ryo Ueda",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		249,
	],

	hp: 170,

	types: [
		"Colorless",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Aero Ball",
				'fr-fr': "Aéro Ball",
				'es-es': "Bola Aérea",
				'it-it': "Aerosfera",
				'pt-br': "Aerobola",
				'de-de': "Luftball"
			},
			effect: {
				'en-us': "This attack does 20 damage times the amount of Energy attached to both Active Pokémon.",
				'fr-fr': "Cette attaque inflige 20 dégâts multipliés par le nombre d'Énergies attachées aux deux Pokémon Actifs.",
				'es-es': "Este ataque hace 20 puntos de daño por cada Energía unida a ambos Pokémon Activos.",
				'it-it': "Questo attacco infligge 20 danni per ogni Energia assegnata a ciascuno dei Pokémon attivi.",
				'pt-br': "Este ataque causa 20 de danos vezes a quantidade de Energia ligada a ambos os Pokémon Ativos.",
				'de-de': "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der an beide Aktiven Pokémon angelegten Energien zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Deep Hurricane",
				'fr-fr': "Ouragan Intense",
				'es-es': "Huracán Profundo",
				'it-it': "Uragano Abissale",
				'pt-br': "Furacão Profundo",
				'de-de': "Unterwasser-Orkan"
			},
			effect: {
				'en-us': "If there is any Stadium card in play, this attack does 70 more damage. Then, discard that Stadium card.",
				'fr-fr': "S'il y a une carte Stade en jeu, cette attaque inflige 70 dégâts supplémentaires. Ensuite, défaussez la carte Stade.",
				'es-es': "Si hay alguna carta de Estadio en juego, este ataque hace 70 puntos de daño más. Después, descarta esa carta de Estadio.",
				'it-it': "Se c'è in gioco una carta Stadio, questo attacco infligge 70 danni in più. Poi, scarta quella carta Stadio.",
				'pt-br': "Se houver algum card de Estádio em jogo, este ataque causará 70 de danos adicionais. Em seguida, descarte o card de Estádio.",
				'de-de': "Wenn eine Stadionkarte im Spiel ist, fügt dieser Angriff 70 weitere Schadenspunkte zu. Lege diese Stadionkarte anschließend auf den Ablagestapel."
			},
			damage: "80+",

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

	retreat: 2,
	stage: "Basic",

	thirdParty: {
		cardmarket: 284249,
		tcgplayer: 101516
	}
}

export default card
