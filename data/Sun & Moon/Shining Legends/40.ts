import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Shining Mew",
		fr: "Mew Brillant",
		es: "Mew Luminoso",
		it: "Mew iridescente",
		pt: "Mew Luminescente",
		de: "Schimmerndes Mew"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		151,
	],

	hp: 30,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Legendary Guidance",
				fr: "Conseil Légendaire",
				es: "Guía Legendaria",
				it: "Guida Leggendaria",
				pt: "Orientação Lendária",
				de: "Legendäres Geleit"
			},
			effect: {
				en: "Search your deck for up to 2 Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
				fr: "Cherchez jusqu’à 2 cartes Énergie dans votre deck et attachez-les à vos Pokémon, de la manière que vous voulez. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 2 cartas de Energía y únelas a tus Pokémon de la manera que desees. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo fino a due carte Energia e assegnale a piacimento ai tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por até 2 cartas de Energia no seu baralho e ligue-as aos seus Pokémon como desejar. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach bis zu 2 Energiekarten und lege sie beliebig an deine Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Beam",
				fr: "Rayon",
				es: "Transmisión",
				it: "Raggio",
				pt: "Feixe",
				de: "Strahl"
			},

			damage: 10,

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
