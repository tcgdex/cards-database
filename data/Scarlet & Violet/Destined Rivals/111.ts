import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Cornerstone Mask Ogerpon",
		fr: "Ogerpon Masque de la Pierre",
		de: "Fundamentmaske-Ogerpon",
		it: "Ogerpon Maschera Fondamenta",
		es: "Ogerpon Máscara Cimiento",
		pt: "Ogerpon Máscara Alicerce",
		'es-mx': "Ogerpon Máscara Cimiento"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Rock Kagura",
			fr: "Kagura Roche",
			de: "Gesteins-Kagura",
			it: "Kagura della Roccia",
			es: "Kagura Roca",
			pt: "Kagura de Pedra",
			'es-mx': "Kagura de Roca"
		},

		effect: {
			en: "Search your deck for a Basic {F} Energy card and attach it to 1 of your Pokémon. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Énergie {F} de base, puis attachez-la à l'un de vos Pokémon. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach 1 Basis-{F}-Energiekarte und lege sie an 1 deiner Pokémon an. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo una carta Energia base {F} e assegnala a uno dei tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
			es: "Busca en tu baraja 1 carta de Energía {F} Básica y únela a uno de tus Pokémon. Después, baraja las cartas de tu baraja.",
			pt: "Procure por uma carta de Energia {F} Básica no seu baralho e ligue-a a 1 dos seus Pokémon. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Busca en tu mazo 1 carta de Energía {F} Básica y únela a 1 de tus Pokémon. Después, baraja las cartas de tu mazo."
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Mountain Ramming",
			fr: "Pousse-Montagnes",
			de: "Bergramme",
			it: "Speronamonte",
			es: "Empuje Montaña",
			pt: "Colisão Montanhosa",
			'es-mx': "Empuje Montañoso"
		},

		effect: {
			en: "Discard the top card of your opponent's deck.",
			fr: "Défaussez la carte du dessus du deck de votre adversaire.",
			de: "Lege die oberste Karte des Decks deines Gegners auf seinen Ablagestapel.",
			it: "Scarta la prima carta del mazzo del tuo avversario.",
			es: "Descarta la primera carta de la baraja de tu rival.",
			pt: "Descarte a carta de cima do baralho do seu oponente.",
			'es-mx': "Descarta la primera carta del mazo de tu rival."
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		holo: false
	},

	variants_detailed: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
