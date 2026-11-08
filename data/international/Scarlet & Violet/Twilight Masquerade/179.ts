import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [358],
	set: Set,

	name: {
		'en-us': "Chimecho",
		'fr-fr': "Éoko",
		'es-es': "Chimecho",
		'it-it': "Chimecho",
		'pt-br': "Chimecho",
		'de-de': "Palimpalim"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Hyper Voice",
			'fr-fr': "Mégaphone",
			'es-es': "Vozarrón",
			'it-it': "Granvoce",
			'pt-br': "Hipervoz",
			'de-de': "Schallwelle"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Homeward Chime",
			'fr-fr': "Carillon de Rentrée",
			'es-es': "Campanas de Bienvenida",
			'it-it': "Tintinnio Familiare",
			'pt-br': "Sino de Boas-vindas",
			'de-de': "Heimklang"
		},

		effect: {
			'en-us': "Shuffle 1 of your Benched Pokémon and all attached cards into your deck.",
			'fr-fr': "Mélangez avec votre deck l'un de vos Pokémon de Banc et toutes les cartes qui lui sont attachées.",
			'es-es': "Pon 1 de tus Pokémon en Banca y todas las cartas unidas a él en tu baraja, y barájalas todas.",
			'it-it': "Rimischia uno dei tuoi Pokémon in panchina e tutte le carte a esso assegnate nel tuo mazzo.",
			'pt-br': "Embaralhe 1 dos seus Pokémon no Banco e todas as cartas ligadas a ele no seu baralho.",
			'de-de': "Mische 1 Pokémon auf deiner Bank und alle angelegten Karten in dein Deck."
		}
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "Its cries echo inside its hollow body to emerge as beautiful notes for startling and repelling foes.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 769353,
				tcgplayer: 550223
			}
		},
	],

	illustrator: "REND",

}

export default card