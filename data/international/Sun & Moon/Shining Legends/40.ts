import { Card } from 'models/database/card'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		'en-us': "Shining Mew",
		'fr-fr': "Mew Brillant",
		'es-es': "Mew Luminoso",
		'it-it': "Mew iridescente",
		'pt-br': "Mew Luminescente",
		'de-de': "Schimmerndes Mew"
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
				'en-us': "Legendary Guidance",
				'fr-fr': "Conseil Légendaire",
				'es-es': "Guía Legendaria",
				'it-it': "Guida Leggendaria",
				'pt-br': "Orientação Lendária",
				'de-de': "Legendäres Geleit"
			},
			effect: {
				'en-us': "Search your deck for up to 2 Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
				'fr-fr': "Cherchez jusqu’à 2 cartes Énergie dans votre deck et attachez-les à vos Pokémon, de la manière que vous voulez. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja hasta 2 cartas de Energía y únelas a tus Pokémon de la manera que desees. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo fino a due carte Energia e assegnale a piacimento ai tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por até 2 cartas de Energia no seu baralho e ligue-as aos seus Pokémon como desejar. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach bis zu 2 Energiekarten und lege sie beliebig an deine Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Beam",
				'fr-fr': "Rayon",
				'es-es': "Transmisión",
				'it-it': "Raggio",
				'pt-br': "Feixe",
				'de-de': "Strahl"
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

	retreat: 0,

	description: {
		'en-us': "Because it can use all kinds of moves, many scientists believe Mew to be the ancestor of Pokémon.",
	},

	thirdParty: {
		cardmarket: 302178,
		tcgplayer: 146699
	}
}

export default card
