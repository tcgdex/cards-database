import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Mothim",
		fr: "Papilord",
		es: "Mothim",
		it: "Mothim",
		pt: "Mothim",
		de: "Moterpel"
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
		en: "Burmy",
		fr: "Cheniti",
		es: "Burmy",
		it: "Burmy",
		pt: "Burmy",
		de: "Burmy"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Wormadam First",
				fr: "Cheniselle d'Abord",
				es: "Wormadam Primero",
				it: "Prima Wormadam",
				pt: "As Wormadam Primeiro",
				de: "Burmadame zuerst"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your Wormadam to another of your Pokémon.",
				fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez déplacer 1 marqueur de dégâts de l'un de vos Cheniselle vers un autre de vos Pokémon.",
				es: "Todas las veces que quieras durante tu turno (antes de tu ataque), puedes mover 1 contador de daño de 1 de tus Wormadam a otro de tus Pokémon.",
				it: "Durante il tuo turno, prima di attaccare, puoi spostare un segnalino danno da uno dei tuoi Wormadam a un altro dei tuoi Pokémon tutte le volte che vuoi.",
				pt: "Tantas vezes quanto desejar durante sua vez de jogar (antes de atacar), você pode mover 1 contador de danos de 1 de suas Wormadam para outro dos seus Pokémon.",
				de: "Beliebig oft während deines Zuges (vor deinem Angriff) kannst du 1 Schadensmarke von 1 deiner Burmadame auf ein anderes deiner Pokémon verschieben."
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
				en: "Gust",
				fr: "Tornade",
				es: "Tornado",
				it: "Raffica",
				pt: "Lufada de Vento",
				de: "Windstoß"
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

	retreat: 0
}

export default card
