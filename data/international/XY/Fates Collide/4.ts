import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Mothim",
		'fr-fr': "Papilord",
		'es-es': "Mothim",
		'it-it': "Mothim",
		'pt-br': "Mothim",
		'de-de': "Moterpel"
	},

	illustrator: "MAHOU",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		414,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Burmy",
		'fr-fr': "Cheniti",
		'es-es': "Burmy",
		'it-it': "Burmy",
		'pt-br': "Burmy",
		'de-de': "Burmy"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Wormadam First",
				'fr-fr': "Cheniselle d'Abord",
				'es-es': "Wormadam Primero",
				'it-it': "Prima Wormadam",
				'pt-br': "As Wormadam Primeiro",
				'de-de': "Burmadame zuerst"
			},
			effect: {
				'en-us': "As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your Wormadam to another of your Pokémon.",
				'fr-fr': "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez déplacer 1 marqueur de dégâts de l'un de vos Cheniselle vers un autre de vos Pokémon.",
				'es-es': "Todas las veces que quieras durante tu turno (antes de tu ataque), puedes mover 1 contador de daño de 1 de tus Wormadam a otro de tus Pokémon.",
				'it-it': "Durante il tuo turno, prima di attaccare, puoi spostare un segnalino danno da uno dei tuoi Wormadam a un altro dei tuoi Pokémon tutte le volte che vuoi.",
				'pt-br': "Tantas vezes quanto desejar durante sua vez de jogar (antes de atacar), você pode mover 1 contador de danos de 1 de suas Wormadam para outro dos seus Pokémon.",
				'de-de': "Beliebig oft während deines Zuges (vor deinem Angriff) kannst du 1 Schadensmarke von 1 deiner Burmadame auf ein anderes deiner Pokémon verschieben."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gust",
				'fr-fr': "Tornade",
				'es-es': "Tornado",
				'it-it': "Raffica",
				'pt-br': "Lufada de Vento",
				'de-de': "Windstoß"
			},

			damage: 60,

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

	retreat: 0,

	description: {
		'en-us': "It flutters around at night and steals honey from the Combee hive.",
	},

	thirdParty: {
		cardmarket: 289830,
		tcgplayer: 117767
	}
}

export default card
