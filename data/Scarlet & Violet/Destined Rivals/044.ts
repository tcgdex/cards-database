import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Hearthflame Mask Ogerpon",
		fr: "Ogerpon Masque du Fourneau",
		de: "Ofenmaske-Ogerpon",
		it: "Ogerpon Maschera Focolare",
		es: "Ogerpon Máscara Horno",
		pt: "Ogerpon Máscara Fornalha",
		'es-mx': "Ogerpon Máscara Horno"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Fire Kagura",
			fr: "Kagura Feu",
			de: "Feuer-Kagura",
			it: "Kagura del Fuoco",
			es: "Kagura Fuego",
			pt: "Kagura de Fogo",
			'es-mx': "Kagura de Fuego"
		},

		effect: {
			en: "Search your deck for a Basic {R} Energy card and attach it to 1 of your Pokémon. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Énergie {R} de base, puis attachez-la à l'un de vos Pokémon. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach 1 Basis-{R}-Energiekarte und lege sie an 1 deiner Pokémon an. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo una carta Energia base {R} e assegnala a uno dei tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
			es: "Busca en tu baraja 1 carta de Energía {R} Básica y únela a uno de tus Pokémon. Después, baraja las cartas de tu baraja.",
			pt: "Procure por uma carta de Energia {R} Básica no seu baralho e ligue-a a 1 dos seus Pokémon. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Busca en tu mazo 1 carta de Energía {R} Básica y únela a 1 de tus Pokémon. Después, baraja las cartas de tu mazo."
		}
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Searing Flame",
			fr: "Flammes Calcinantes",
			de: "Sengende Flammen",
			it: "Fiamme Ustionanti",
			es: "Llama Abrasadora",
			pt: "Chama Cauterizante",
			'es-mx': "Llama Abrasadora"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato.",
			es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
			pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Quemado."
		},

		damage: 80
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
