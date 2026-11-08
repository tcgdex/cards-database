import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [470],
	set: Set,

	name: {
		'en-us': "Leafeon",
		'fr-fr': "Phyllali",
		'es-es': "Leafeon",
		'it-it': "Leafeon",
		'pt-br': "Leafeon",
		'de-de': "Folipurba"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'es-es': "Eevee",
		'it-it': "Eevee",
		'pt-br': "Eevee",
		'de-de': "Evoli"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Energy Garden",
			'fr-fr': "Jardin d'Énergie",
			'es-es': "Jardín de Energía",
			'it-it': "Giardino di Energia",
			'pt-br': "Jardim de Energia",
			'de-de': "Energiegarten"
		},

		effect: {
			'en-us': "Search your deck for up to 3 basic Energy cards of different types and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 3 cartes Énergie de base de types différents, puis attachez-les à vos Pokémon comme il vous plaît. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 3 cartas de Energía Básica de diferentes tipos y únelas a tus Pokémon de la manera que desees. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a tre carte Energia base di tipo diverso e assegnale ai tuoi Pokémon nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 3 cartas de Energia básica de tipos diferentes no seu baralho e ligue-as aos seus Pokémon como desejar. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 3 Basis-Energiekarten verschiedenen Typs und lege sie beliebig an deine Pokémon an. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Leafy Cyclone",
			'fr-fr': "Cyclone Arboré",
			'es-es': "Ciclón Hojarasca",
			'it-it': "Fogliaturbine",
			'pt-br': "Ciclone Folhoso",
			'de-de': "Blättergewirbel"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "Cells similar to those of plants have been found in its fur. Its hard tail can fell a large tree with one stroke, and the tail's sharpness exceeds even that of a sword crafted by a master.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658506,
				tcgplayer: 272213
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658506,
				tcgplayer: 272213
			}
		},
	],
}

export default card
