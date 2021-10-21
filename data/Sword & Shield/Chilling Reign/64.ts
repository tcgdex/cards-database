import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	name: {
		en: "Cresselia",
		fr: "Cresselia",
		es: "Cresselia",
		it: "Cresselia",
		pt: "Cresselia",
		de: "Cresselia"
	},

	illustrator: "Tika Matsuno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,
	dexId: [488],

	types: [
		"Psychic",
	],

	stage: 'Basic',

	description: {
		en: "Those who sleep holding Cresselia's feather are assured of joyful dreams. It is said to represent the crescent moon.",
		fr: "Dormir aec une de ses plumes à la main\npermet de faire de beaux rêves. On le\nsurnomme « avatar d croissant de lune »."
	},

	attacks: [
		{
			cost: [
				"Psychic"
			],
			name: {
				en: "Crescent Glow",
				fr: "Lueur Lunule",
				es: "Brillo Creciente",
				it: "Luce Crescente",
				pt: "Brilho Crescente",
				de: "Mondsichelleuchten"
			},
			effect: {
				en: "Search your deck for a Psychic Energy card and attach it to 1 of your Pokémon. If you go second and it's your first turn, instead search for up to 3 Psychic Energy cards and attach them to 1 of your Pokémon. Then, shuffle your deck.",
				fr: "Cherchez dans votre deck une carte Énergie Psychic, puis attachez-la à l'un de vos Pokémon. Si vous jouez en second et que c'est votre premier tour, cherchez jusqu'à 3 cartes Énergie Psychic à la place, puis attachez-les à l'un de vos Pokémon. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja 1 carta de Energía Psychic y únela a 1 de tus Pokémon. Si sales segundo y es tu primer turno, busca hasta 3 cartas de Energía Psychic en vez de 1 y únelas a 1 de tus Pokémon. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo una carta Energia Psychic e assegnala a uno dei tuoi Pokémon. Se inizi per secondo ed è il tuo primo turno, invece cerca fino a tre carte Energia Psychic e assegnale a uno dei tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por 1 carta de Energia Psychic no seu baralho e ligue-a a 1 dos seus Pokémon. Se você for o segundo a jogar e este for o seu primeiro turno, procure por até 3 cartas de Energia Psychic ao invés de 1 e ligue-as a 1 dos seus Pokémon. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach 1 Psychic-Energiekarte und lege sie an 1 deiner Pokémon an. Wenn du als Zweiter am Zug bist und es dein erster Zug ist, durchsuche dein Deck stattdessen nach bis zu 3 Psychic-Energiekarten und lege sie an 1 deiner Pokémon an. Mische anschließend dein Deck."
			}
		},
		{
			cost: [
				"Psychic",
				"Psychic"
			],
			name: {
				en: "Photon Laser",
				fr: "Laser à Photons",
				es: "Láser Fotónico",
				it: "Laser Fotonico",
				pt: "Laser de Fótons",
				de: "Photonenlaser"
			},
			effect: {
				en: "If you have at least 5 Energy in play, this attack does 90 more damage.",
				fr: "Si vous avez au moins 5 Énergies en jeu, cette attaque inflige 90 dégâts supplémentaires.",
				es: "Si tienes por lo menos 5 Energías en juego, este ataque hace 90 puntos de daño más.",
				it: "Se hai almeno cinque Energie in gioco, questo attacco infligge 90 danni in più.",
				pt: "Se você tiver pelo menos 5 Energias em jogo, este ataque causará 90 pontos de dano a mais.",
				de: "Wenn du mindestens 5 Energien im Spiel hast, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: '30+'
		}
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card
