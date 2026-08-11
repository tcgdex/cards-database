import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Kingdra EX",
		'fr-fr': "Hyporoi EX",
		'es-es': "Kingdra EX",
		'it-it': "Kingdra EX",
		'pt-br': "Kingdra EX",
		'de-de': "Seedraking EX"
	},

	illustrator: "Ryo Ueda",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		230,
	],

	hp: 170,

	types: [
		"Dragon",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Big Storm",
				'fr-fr': "Forte Tempête",
				'es-es': "Gran Tempestad",
				'it-it': "Fortempesta",
				'pt-br': "Tempestade Enorme",
				'de-de': "Großer Sturm"
			},
			effect: {
				'en-us': "Discard any Stadium card in play.",
				'fr-fr': "Défaussez toute carte Stade en jeu.",
				'es-es': "Descarta cualquier carta de Estadio en juego.",
				'it-it': "Scarta una carta Stadio in gioco.",
				'pt-br': "Descarte qualquer card de Estádio em jogo.",
				'de-de': "Lege 1 beliebige Stadionkarte im Spiel auf den Ablagestapel."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Trail",
				'fr-fr': "Draco-Traînée",
				'es-es': "Rastro de Dragón",
				'it-it': "Dragotraccia",
				'pt-br': "Trilha do Dragão",
				'de-de': "Drachenspur"
			},
			effect: {
				'en-us': "This attack does 30 more damage for each basic Lightning Energy attached to this Pokémon.",
				'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Lightning de base attachée à ce Pokémon.",
				'es-es': "Este ataque hace 30 puntos de daño más por cada Energía Básica Lightning unida a este Pokémon.",
				'it-it': "Questo attacco infligge 30 danni in più per ogni Energia base Lightning assegnata a questo Pokémon.",
				'pt-br': "Este ataque causa 30 de danos adicionais para cada Energia básica Lightning ligada a este Pokémon.",
				'de-de': "Dieser Angriff fügt 30 weitere Schadenspunkte mal der Anzahl der an dieses Pokémon angelegten Lightning-Basis-Energien zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,
	stage: "Basic",

	thirdParty: {
		cardmarket: 289942,
		tcgplayer: 117894
	}
}

export default card
