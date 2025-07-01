import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Wellspring Mask Ogerpon",
		fr: "Ogerpon Masque du Puits",
		de: "Brunnenmaske-Ogerpon",
		it: "Ogerpon Maschera Pozzo",
		es: "Ogerpon Máscara Fuente",
		pt: "Ogerpon Máscara Nascente",
		'es-mx': "Ogerpon Máscara Fuente"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Water Kagura",
			fr: "Kagura Eau",
			de: "Wasser-Kagura",
			it: "Kagura dell'Acqua",
			es: "Kagura Agua",
			pt: "Kagura de Água",
			'es-mx': "Kagura de Agua"
		},

		effect: {
			en: "Search your deck for a Basic {W} Energy card and attach it to 1 of your Pokémon. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Énergie {W} de base, puis attachez-la à l'un de vos Pokémon. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach 1 Basis-{W}-Energiekarte und lege sie an 1 deiner Pokémon an. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo una carta Energia base {W} e assegnala a uno dei tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
			es: "Busca en tu baraja 1 carta de Energía {W} Básica y únela a uno de tus Pokémon. Después, baraja las cartas de tu baraja.",
			pt: "Procure por uma carta de Energia {W} Básica no seu baralho e ligue-a a 1 dos seus Pokémon. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Busca en tu mazo 1 carta de Energía {W} Básica y únela a 1 de tus Pokémon. Después, baraja las cartas de tu mazo."
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Bubble Drain",
			fr: "Vide Bulle",
			de: "Blasengully",
			it: "Assorbibolla",
			es: "Drenaje Burbujas",
			pt: "Dreno de Bolha",
			'es-mx': "Drenado Burbujeante"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			pt: "Cure 30 pontos de dano deste Pokémon.",
			'es-mx': "Cura 30 puntos de daño a este Pokémon."
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
