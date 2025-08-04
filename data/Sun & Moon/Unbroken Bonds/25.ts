import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Volcanion",
		fr: "Volcanion",
		es: "Volcanion",
		it: "Volcanion",
		pt: "Volcanion",
		de: "Volcanion"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		721,
	],

	hp: 120,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Flare Starter",
				fr: "Allume Flambée",
				es: "Prender Fuego",
				it: "Accendifiamma",
				pt: "Atear Fogo",
				de: "Feuerfächer"
			},
			effect: {
				en: "Search your deck for a Fire Energy card and attach it to 1 of your Pokémon. If you go second and it’s your first turn, instead search for up to 3 Fire Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
				fr: "Cherchez une carte Énergie Fire dans votre deck et attachez-la à l’un de vos Pokémon. Si vous jouez en second et que c’est votre premier tour, cherchez jusqu’à 3 cartes Énergie Fire à la place et attachez-les à vos Pokémon, de la manière que vous voulez. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja 1 carta de Energía Fire y únela a 1 de tus Pokémon. Si sales segundo y es tu primer turno, busca hasta 3 cartas de Energía Fire y únelas a tus Pokémon de la manera que desees. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo una carta Energia Fire e assegnala a uno dei tuoi Pokémon. Se inizi per secondo e se è il tuo primo turno, invece, cerca fino a tre carte Energia Fire e assegnale a piacimento ai tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por 1 carta de Energia Fire no seu baralho e ligue-a a 1 dos seus Pokémon. Se você for o segundo a jogar e esta for a sua primeira vez de jogar, procure por até 3 cartas de Energia Fire ao invés de 1 e ligue-as aos seus Pokémon como desejar. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach 1 Fire-Energiekarte und lege sie an 1 deiner Pokémon an. Wenn du als Zweiter am Zug bist und es dein erster Zug ist, durchsuche dein Deck stattdessen nach bis zu 3 Fire-Energiekarten und lege sie beliebig an deine Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "High-Heat Blast",
				fr: "Explosion Haute Température",
				es: "Explosión de Calor Intenso",
				it: "Bombardente",
				pt: "Raio de Calor Intenso",
				de: "Starker Hitzestoß"
			},
			effect: {
				en: "If you have at least 4 Fire Energy in play, this attack does 60 more damage.",
				fr: "Si vous avez au moins 4 Énergies Fire en jeu, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si tienes por lo menos 4 Energías Fire en juego, este ataque hace 60 puntos de daño más.",
				it: "Se hai almeno quattro Energie Fire in gioco, questo attacco infligge 60 danni in più.",
				pt: "Se você tiver pelo menos 4 Energias Fire em jogo, este ataque causará 60 pontos de dano a mais.",
				de: "Wenn du mindestens 4 Fire-Energien im Spiel hast, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 372317,
		tcgplayer: 189070
	}
}

export default card
