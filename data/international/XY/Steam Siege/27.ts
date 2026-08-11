import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Mantine",
		'fr-fr': "Démanta",
		'es-es': "Mantine",
		'it-it': "Mantine",
		'pt-br': "Mantine",
		'de-de': "Mantax"
	},

	illustrator: "DemizuPosuka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		226,
	],

	hp: 100,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Healing Wave",
				'fr-fr': "Vague de Soin",
				'es-es': "Ola Sanadora",
				'it-it': "Ondacura",
				'pt-br': "Onda Curadora",
				'de-de': "Heilende Woge"
			},
			effect: {
				'en-us': "Discard as many cards as you like from your hand. Heal 10 damage from this Pokémon for each card you discarded in this way.",
				'fr-fr': "Défaussez autant de cartes que vous voulez de votre main. Soignez 10 dégâts à ce Pokémon pour chaque carte défaussée de cette façon.",
				'es-es': "Descarta tantas cartas como quieras de tu mano. Cura 10 puntos de daño a este Pokémon por cada carta descartada de esta manera.",
				'it-it': "Scarta tutte le carte che vuoi dalla tua mano. Cura questo Pokémon da 10 danni per ogni carta scartata in questo modo.",
				'pt-br': "Descarte tantos cards quanto desejar da sua mão. Cure 10 de danos deste Pokémon para cada card descartado desta forma.",
				'de-de': "Lege beliebig viele Karten von deiner Hand auf deinen Ablagestapel. Heile bei diesem Pokémon 10 Schadenspunkte für jede Karte, die du auf diese Weise auf deinen Ablagestapel gelegt hast."
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				'en-us': "Dwindling Wave",
				'fr-fr': "Vague Faiblissante",
				'es-es': "Ola Menguante",
				'it-it': "Onda Evanescente",
				'pt-br': "Onda Decrescente",
				'de-de': "Schwindende Welle"
			},
			effect: {
				'en-us': "This attack does 90 damage minus 10 damage for each damage counter on this Pokémon.",
				'fr-fr': "Cette attaque inflige 90 dégâts moins 10 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon.",
				'es-es': "Este ataque hace 90 puntos de daño menos 10 puntos de daño por cada contador de daño en este Pokémon.",
				'it-it': "Questo attacco infligge 90 danni meno 10 per ogni segnalino danno presente su questo Pokémon.",
				'pt-br': "Este ataque causa 90 de danos menos 10 de danos para cada contador de danos neste Pokémon.",
				'de-de': "Dieser Angriff fügt 90 Schadenspunkte minus 10 Schadenspunkte für jede Schadensmarke auf diesem Pokémon zu."
			},
			damage: "90−",

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

	retreat: 1,

	description: {
		'en-us': "While elegantly swimming in the sea, it ignores Remoraid that cling to its fins seeking food scraps.",
	},

	thirdParty: {
		cardmarket: 291528,
		tcgplayer: 121014
	}
}

export default card
