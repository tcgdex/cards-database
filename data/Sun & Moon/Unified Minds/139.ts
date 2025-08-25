import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Yveltal",
		fr: "Yveltal",
		es: "Yveltal",
		it: "Yveltal",
		pt: "Yveltal",
		de: "Yveltal"
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
				en: "Blow Through",
				fr: "Grosse Bourrasque",
				es: "Gran Torbellino",
				it: "Colposecco",
				pt: "Sopro Intenso",
				de: "Durchdringender Strahl"
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does 20 more damage.",
				fr: "S’il y a une carte Stade en jeu, cette attaque inflige 20 dégâts supplémentaires.",
				es: "Si hay alguna carta de Estadio en juego, este ataque hace 20 puntos de daño más.",
				it: "Se c’è una carta Stadio in gioco, questo attacco infligge 20 danni in più.",
				pt: "Se houver alguma carta de Estádio em jogo, este ataque causará 20 pontos de dano a mais.",
				de: "Wenn eine Stadionkarte im Spiel ist, fügt diese Attacke 20 Schadenspunkte mehr zu."
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
				en: "Shadow Impact",
				fr: "Impact Lugubre",
				es: "Impacto Sombra",
				it: "Impatto Ombra",
				pt: "Impacto Sombrio",
				de: "Schatteneinschlag"
			},
			effect: {
				en: "Put 3 damage counters on 1 of your Pokémon.",
				fr: "Placez 3 marqueurs de dégâts sur l’un de vos Pokémon.",
				es: "Pon 3 contadores de daño en 1 de tus Pokémon.",
				it: "Metti tre segnalini danno su uno dei tuoi Pokémon.",
				pt: "Coloque 3 contadores de dano em 1 dos seus Pokémon.",
				de: "Lege 3 Schadensmarken auf 1 deiner Pokémon."
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

	thirdParty: {
		cardmarket: 388492,
		tcgplayer: 195118
	}
}

export default card
