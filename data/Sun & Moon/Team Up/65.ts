import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Starmie",
		fr: "Staross",
		es: "Starmie",
		it: "Starmie",
		pt: "Starmie",
		de: "Starmie"
	},

	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		121,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Staryu",
		fr: "Stari",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Strange Wave",
				fr: "Vague Insolite",
				es: "Ola Extraña",
				it: "Onda Atipica",
				pt: "Onda Estranha",
				de: "Seltsame Welle"
			},
			effect: {
				en: "Search your deck for up to 3 in any combination of Water and Psychic Energy cards and attach them to 1 of your Benched Pokémon. Then, shuffle your deck.",
				fr: "Cherchez une combinaison d’un maximum de 3 cartes Énergie Water et Psychic dans votre deck et attachez-les à l’un de vos Pokémon de Banc. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 3 cartas de Energía Water y Psychic, en cualquier combinación, y únelas a 1 de tus Pokémon en Banca. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo fino a tre carte Energia Water e Psychic in qualsiasi combinazione e assegnale a uno dei tuoi Pokémon in panchina. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por até 3 cartas de Energia Water e Psychic no seu baralho em qualquer combinação e ligue-as a 1 dos seus Pokémon no Banco. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach einer beliebigen Kombination aus bis zu 3 Water- und Psychic-Energiekarten und lege sie an 1 Pokémon auf deiner Bank an. Mische anschließend dein Deck."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 0
}

export default card
