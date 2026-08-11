import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [1024],
	set: Set,

	name: {
		'en-us': "Terapagos",
		'fr-fr': "Terapagos",
		'es-es': "Terapagos",
		'it-it': "Terapagos",
		'pt-br': "Terapagos",
		'de-de': "Terapagos"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Prism Charge",
			'fr-fr': "Charge Prisme",
			'es-es': "Carga Prisma",
			'it-it': "Carica Prisma",
			'pt-br': "Carga Prisma",
			'de-de': "Prismaladung"
		},

		effect: {
			'en-us': "Search your deck for up to 3 Basic Energy cards of different types and attach them to your Tera Pokémon in any way you like. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 3 cartes Énergie de base de types différents, puis attachez-les à vos Pokémon Téracristal comme il vous plaît. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 3 cartas de Energía Básica de diferentes tipos y únelas a tus Pokémon Teracristal de la manera que desees. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a tre carte Energia base di tipo diverso e assegnale ai tuoi Pokémon Teracristal nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 3 cartas de Energia Básica de tipos diferentes no seu baralho e ligue-as aos seus Pokémon Tera como desejar. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 3 Basis-Energiekarten verschiedenen Typs und lege sie beliebig an deine Terakristall-Pokémon an. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Hard Tackle",
			'fr-fr': "Tacle Violent",
			'es-es': "Bloqueo Contundente",
			'it-it': "Azione Dura",
			'pt-br': "Investida Resistente",
			'de-de': "Harter Tackle"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 794948,
				tcgplayer: 590077
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794948,
				tcgplayer: 590077
			}
		},
		{
			type: "holo",
			stamp: ["horizons"],
			thirdParty: {
				cardmarket: 794534,
			}
		},
	],

	illustrator: "GIDORA",

}

export default card
