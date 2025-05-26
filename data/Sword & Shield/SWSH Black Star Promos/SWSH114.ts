import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "Kagemaru Himeno",
	category: "Pokemon",

	description: {
		en: "Those who sleep holding Cresselia's feather are assured of joyful dreams. It is said to represent the crescent moon."
	},

	stage: "Basic",

	name: {
		en: "Cresselia",
		fr: "Cresselia",
		de: "Cresselia",
		es: "Cresselia",
		pt: "Cresselia",
		it: "Cresselia"
	},

	rarity: "None",
	dexId: [488],
	hp: 120,
	types: ["Psychic"],

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Crescent Glow",
			fr: "Lueur Lunule",
			de: "Mondsichelleuchten",
			es: "Brillo Creciente",
			pt: "Brilho Crescente",
			it: "Luce Crescente"
		},

		effect: {
			en: "Search your deck for a {P} Energy card and attach it to 1 of your Pokémon. If you go second and it's your first turn, instead search for up to 3 {P} Energy cards and attach them to 1 of your Pokémon. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Énergie {P}, puis attachez-la à l'un de vos Pokémon. Si vous jouez en second et que c'est votre premier tour, cherchez jusqu'à 3 cartes Énergie {P} à la place, puis attachez-les à l'un de vos Pokémon. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach 1 {P}-Energiekarte und lege sie an 1 deiner Pokémon an. Wenn du als Zweiter am Zug bist und es dein erster Zug ist, durchsuche dein Deck stattdessen nach bis zu 3 {P}-Energiekarten und lege sie an 1 deiner Pokémon an. Mische anschließend dein Deck.",
			es: "Busca en tu baraja 1 carta de Energía {P} y únela a 1 de tus Pokémon. Si sales segundo y es tu primer turno, busca hasta 3 cartas de Energía {P} en vez de 1 y únelas a 1 de tus Pokémon. Después, baraja las cartas de tu baraja.",
			pt: "Procure por 1 carta de Energia {P} no seu baralho e ligue-a a 1 dos seus Pokémon. Se você for o segundo a jogar e este for o seu primeiro turno, procure por até 3 cartas de Energia {P} ao invés de 1 e ligue-as a 1 dos seus Pokémon. Em seguida, embaralhe o seu baralho.",
			it: "Cerca nel tuo mazzo una carta Energia {P} e assegnala a uno dei tuoi Pokémon. Se inizi per secondo ed è il tuo primo turno, invece cerca fino a tre carte Energia {P} e assegnale a uno dei tuoi Pokémon. Poi rimischia le carte del tuo mazzo."
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			en: "Photon Laser",
			fr: "Laser à Photons",
			de: "Photonenlaser",
			es: "Láser Fotónico",
			pt: "Laser de Fótons",
			it: "Laser Fotonico"
		},

		effect: {
			en: "If you have at least 5 Energy in play, this attack does 90 more damage.",
			fr: "Si vous avez au moins 5 Énergies en jeu, cette attaque inflige 90 dégâts supplémentaires.",
			de: "Wenn du mindestens 5 Energien im Spiel hast, fügt diese Attacke 90 Schadenspunkte mehr zu.",
			es: "Si tienes por lo menos 5 Energías en juego, este ataque hace 90 puntos de daño más.",
			pt: "Se você tiver pelo menos 5 Energias em jogo, este ataque causará 90 pontos de dano a mais.",
			it: "Se hai almeno cinque Energie in gioco, questo attacco infligge 90 danni in più."
		},

		damage: "30+"
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "E"
}

export default card
