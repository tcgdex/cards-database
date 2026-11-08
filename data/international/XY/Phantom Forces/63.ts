import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Heatran",
		'fr-fr': "Heatran",
		'es-es': "Heatran",
		'it-it': "Heatran",
		'pt-br': "Heatran",
		'de-de': "Heatran"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		485,
	],

	hp: 130,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Steel Drop",
				'fr-fr': "Démolition Contrôlée",
				'es-es': "Caída de Acero",
				'it-it': "Cadutacciaio",
				'pt-br': "Queda de Aço",
				'de-de': "Stahlsturz"
			},
			effect: {
				'en-us': "If there is any Stadium card in play, this attack does 40 more damage.",
				'fr-fr': "S'il y a une carte Stade en jeu, cette attaque inflige 40 dégâts supplémentaires.",
				'es-es': "Si hay alguna carta de Estadio en juego, este ataque hace 40 puntos de daño más.",
				'it-it': "Se c'è in gioco una carta Stadio, questo attacco infligge 40 danni in più.",
				'pt-br': "Se houver algum card de Estádio em jogo, este ataque causará 40 de danos adicionais.",
				'de-de': "Wenn eine Stadionkarte im Spiel ist, fügt dieser Angriff 40 weitere Schadenspunkte zu."
			},
			damage: "40+",

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Steam Blast",
				'fr-fr': "Geyser de Vapeur",
				'es-es': "Explosión Vapor",
				'it-it': "Sbuffo di Vapore",
				'pt-br': "Explosão de Vapor",
				'de-de': "Dampfstrahl"
			},
			effect: {
				'en-us': "Discard an Energy attached to this Pokémon.",
				'fr-fr': "Défaussez une Énergie attachée à ce Pokémon.",
				'es-es': "Descarta 1 Energía unida a este Pokémon.",
				'it-it': "Scarta un'Energia assegnata a questo Pokémon.",
				'pt-br': "Descarte uma Energia ligada a este Pokémon.",
				'de-de': "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel."
			},
			damage: 130,

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
		'en-us': "It dwells in volcanic caves. It digs in with its cross-shaped feet to crawl on ceilings and walls.",
	},

	thirdParty: {
		cardmarket: 281869,
		tcgplayer: 94631
	}
}

export default card
