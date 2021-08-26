import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Mantine",
		fr: "Démanta",
		es: "Mantine",
		it: "Mantine",
		pt: "Mantine",
		de: "Mantax"
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
				en: "Healing Wave",
				fr: "Vague de Soin",
				es: "Ola Sanadora",
				it: "Ondacura",
				pt: "Onda Curadora",
				de: "Heilende Woge"
			},
			effect: {
				en: "Discard as many cards as you like from your hand. Heal 10 damage from this Pokémon for each card you discarded in this way.",
				fr: "Défaussez autant de cartes que vous voulez de votre main. Soignez 10 dégâts à ce Pokémon pour chaque carte défaussée de cette façon.",
				es: "Descarta tantas cartas como quieras de tu mano. Cura 10 puntos de daño a este Pokémon por cada carta descartada de esta manera.",
				it: "Scarta tutte le carte che vuoi dalla tua mano. Cura questo Pokémon da 10 danni per ogni carta scartata in questo modo.",
				pt: "Descarte tantos cards quanto desejar da sua mão. Cure 10 de danos deste Pokémon para cada card descartado desta forma.",
				de: "Lege beliebig viele Karten von deiner Hand auf deinen Ablagestapel. Heile bei diesem Pokémon 10 Schadenspunkte für jede Karte, die du auf diese Weise auf deinen Ablagestapel gelegt hast."
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Dwindling Wave",
				fr: "Vague Faiblissante",
				es: "Ola Menguante",
				it: "Onda Evanescente",
				pt: "Onda Decrescente",
				de: "Schwindende Welle"
			},
			effect: {
				en: "This attack does 90 damage minus 10 damage for each damage counter on this Pokémon.",
				fr: "Cette attaque inflige 90 dégâts moins 10 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon.",
				es: "Este ataque hace 90 puntos de daño menos 10 puntos de daño por cada contador de daño en este Pokémon.",
				it: "Questo attacco infligge 90 danni meno 10 per ogni segnalino danno presente su questo Pokémon.",
				pt: "Este ataque causa 90 de danos menos 10 de danos para cada contador de danos neste Pokémon.",
				de: "Dieser Angriff fügt 90 Schadenspunkte minus 10 Schadenspunkte für jede Schadensmarke auf diesem Pokémon zu."
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



}

export default card
