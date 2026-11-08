import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [1017],
	set: Set,

	name: {
		'en-us': "Hearthflame Mask Ogerpon",
		'fr-fr': "Ogerpon Masque du Fourneau",
		'de-de': "Ofenmaske-Ogerpon",
		'it-it': "Ogerpon Maschera Focolare",
		'es-es': "Ogerpon Máscara Horno",
		'pt-br': "Ogerpon Máscara Fornalha",
		'es-mx': "Ogerpon Máscara Horno"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Fire Kagura",
			'fr-fr': "Kagura Feu",
			'de-de': "Feuer-Kagura",
			'it-it': "Kagura del Fuoco",
			'es-es': "Kagura Fuego",
			'pt-br': "Kagura de Fogo",
			'es-mx': "Kagura de Fuego"
		},

		effect: {
			'en-us': "Search your deck for a Basic {R} Energy card and attach it to 1 of your Pokémon. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Énergie {R} de base, puis attachez-la à l'un de vos Pokémon. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach 1 Basis-{R}-Energiekarte und lege sie an 1 deiner Pokémon an. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo una carta Energia base {R} e assegnala a uno dei tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
			'es-es': "Busca en tu baraja 1 carta de Energía {R} Básica y únela a uno de tus Pokémon. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por uma carta de Energia {R} Básica no seu baralho e ligue-a a 1 dos seus Pokémon. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Busca en tu mazo 1 carta de Energía {R} Básica y únela a 1 de tus Pokémon. Después, baraja las cartas de tu mazo."
		}
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Searing Flame",
			'fr-fr': "Flammes Calcinantes",
			'de-de': "Sengende Flammen",
			'it-it': "Fiamme Ustionanti",
			'es-es': "Llama Abrasadora",
			'pt-br': "Chama Cauterizante",
			'es-mx': "Llama Abrasadora"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Quemado."
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825918,
				tcgplayer: 632863
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825918,
				tcgplayer: 632863
			}
		},
	],
}

export default card
