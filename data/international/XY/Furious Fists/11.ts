import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Magmortar",
		'fr-fr': "Maganon",
		'es-es': "Magmortar",
		'it-it': "Magmortar",
		'pt-br': "Magmortar",
		'de-de': "Magbrant"
	},

	illustrator: "PLANETA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		467,
	],

	hp: 120,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Magmar",
		'fr-fr': "Magmar",
		'es-es': "Magmar",
		'it-it': "Magmar",
		'pt-br': "Magmar",
		'de-de': "Magmar"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Flame Charge",
				'fr-fr': "Nitrocharge",
				'es-es': "Nitrocarga",
				'it-it': "Nitrocarica",
				'pt-br': "Ataque de Chamas",
				'de-de': "Nitroladung"
			},
			effect: {
				'en-us': "Search your deck for a Fire Energy card and attach it to this Pokémon. Shuffle your deck afterward.",
				'fr-fr': "Cherchez une carte Énergie Fire dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 1 carta de Energía Fire y únela a este Pokémon. Baraja las cartas de tu baraja después.",
				'it-it': "Cerca nel tuo mazzo una carta Energia Fire e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure em seu baralho um card de Energia Fire e ligue-o a este Pokémon. Em seguida, embaralhe seus cards.",
				'de-de': "Durchsuche dein Deck nach 1 Fire-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Twin Bursts",
				'fr-fr': "Explosions en Duo",
				'es-es': "Estallidos Gemelos",
				'it-it': "Scoppiogemello",
				'pt-br': "Erupções Gêmeas",
				'de-de': "Doppelsalve"
			},
			effect: {
				'en-us': "If Electivire is on your Bench, this attack does 80 more damage.",
				'fr-fr': "Si Élekable est sur votre Banc, cette attaque inflige 80 dégâts supplémentaires.",
				'es-es': "Si Electivire está en tu Banca, este ataque hace 80 puntos de daño más.",
				'it-it': "Se Electivire è nella tua panchina, questo attacco infligge 80 danni in più.",
				'pt-br': "Se Electivire estiver em seu Banco, este ataque causará 80 de danos adicionais.",
				'de-de': "Wenn sich Elevoltek auf deiner Bank befindet, fügt dieser Angriff 80 weitere Schadenspunkte zu."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It blasts fireballs of over 3,600 degrees Fahrenheit from the ends of its arms. It lives in volcanic craters.",
	},

	thirdParty: {
		cardmarket: 281675,
		tcgplayer: 92182
	}
}

export default card
