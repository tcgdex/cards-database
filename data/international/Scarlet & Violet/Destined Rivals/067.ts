import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [1017],
	set: Set,

	name: {
		'en-us': "Wellspring Mask Ogerpon",
		'fr-fr': "Ogerpon Masque du Puits",
		'de-de': "Brunnenmaske-Ogerpon",
		'it-it': "Ogerpon Maschera Pozzo",
		'es-es': "Ogerpon Máscara Fuente",
		'pt-br': "Ogerpon Máscara Nascente",
		'es-mx': "Ogerpon Máscara Fuente"
	},


	illustrator: "rika",

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Water Kagura",
			'fr-fr': "Kagura Eau",
			'de-de': "Wasser-Kagura",
			'it-it': "Kagura dell'Acqua",
			'es-es': "Kagura Agua",
			'pt-br': "Kagura de Água",
			'es-mx': "Kagura de Agua"
		},

		effect: {
			'en-us': "Search your deck for a Basic {W} Energy card and attach it to 1 of your Pokémon. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Énergie {W} de base, puis attachez-la à l'un de vos Pokémon. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach 1 Basis-{W}-Energiekarte und lege sie an 1 deiner Pokémon an. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo una carta Energia base {W} e assegnala a uno dei tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
			'es-es': "Busca en tu baraja 1 carta de Energía {W} Básica y únela a uno de tus Pokémon. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por uma carta de Energia {W} Básica no seu baralho e ligue-a a 1 dos seus Pokémon. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Busca en tu mazo 1 carta de Energía {W} Básica y únela a 1 de tus Pokémon. Después, baraja las cartas de tu mazo."
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Bubble Drain",
			'fr-fr': "Vide Bulle",
			'de-de': "Blasengully",
			'it-it': "Assorbibolla",
			'es-es': "Drenaje Burbujas",
			'pt-br': "Dreno de Bolha",
			'es-mx': "Drenado Burbujeante"
		},

		effect: {
			'en-us': "Heal 30 damage from this Pokémon.",
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'es-mx': "Cura 30 puntos de daño a este Pokémon."
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825941,
				tcgplayer: 632880
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825941,
				tcgplayer: 632880
			}
		},
	],
}

export default card
