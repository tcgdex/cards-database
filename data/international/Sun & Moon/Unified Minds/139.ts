import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Yveltal",
		'fr-fr': "Yveltal",
		'es-es': "Yveltal",
		'it-it': "Yveltal",
		'pt-br': "Yveltal",
		'de-de': "Yveltal"
	},

	illustrator: "sui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		717,
	],

	hp: 130,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Blow Through",
				'fr-fr': "Grosse Bourrasque",
				'es-es': "Gran Torbellino",
				'it-it': "Colposecco",
				'pt-br': "Sopro Intenso",
				'de-de': "Durchdringender Strahl"
			},
			effect: {
				'en-us': "If there is any Stadium card in play, this attack does 20 more damage.",
				'fr-fr': "S’il y a une carte Stade en jeu, cette attaque inflige 20 dégâts supplémentaires.",
				'es-es': "Si hay alguna carta de Estadio en juego, este ataque hace 20 puntos de daño más.",
				'it-it': "Se c’è una carta Stadio in gioco, questo attacco infligge 20 danni in più.",
				'pt-br': "Se houver alguma carta de Estádio em jogo, este ataque causará 20 pontos de dano a mais.",
				'de-de': "Wenn eine Stadionkarte im Spiel ist, fügt diese Attacke 20 Schadenspunkte mehr zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Shadow Impact",
				'fr-fr': "Impact Lugubre",
				'es-es': "Impacto Sombra",
				'it-it': "Impatto Ombra",
				'pt-br': "Impacto Sombrio",
				'de-de': "Schatteneinschlag"
			},
			effect: {
				'en-us': "Put 3 damage counters on 1 of your Pokémon.",
				'fr-fr': "Placez 3 marqueurs de dégâts sur l’un de vos Pokémon.",
				'es-es': "Pon 3 contadores de daño en 1 de tus Pokémon.",
				'it-it': "Metti tre segnalini danno su uno dei tuoi Pokémon.",
				'pt-br': "Coloque 3 contadores de dano em 1 dos seus Pokémon.",
				'de-de': "Lege 3 Schadensmarken auf 1 deiner Pokémon."
			},
			damage: 120,

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

	description: {
		'en-us': "When this legendary Pokémon's wings and tail feathers spread wide and glow red, it absorbs the life force of living creatures.",
	},

	thirdParty: {
		cardmarket: 388492,
		tcgplayer: 195118
	}
}

export default card
