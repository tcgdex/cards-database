import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [836],
	set: Set,

	name: {
		'en-us': "Boltund",
		'fr-fr': "Fulgudog",
		'es-es': "Boltund",
		'it-it': "Boltund",
		'pt-br': "Boltund",
		'de-de': "Bellektro"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Yamper",
		'fr-fr': "Voltoutou",
		'es-es': "Yamper",
		'it-it': "Yamper",
		'pt-br': "Yamper",
		'de-de': "Voldi"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Electrifying Dash",
			'fr-fr': "Ruée Électrifiante",
			'es-es': "Carrera Electrizante",
			'it-it': "Corsa Elettrizzante",
			'pt-br': "Arremetida Eletrizante",
			'de-de': "Elektrisierender Spurt"
		},

		effect: {
			'en-us': "Search your deck for up to 2 Basic {L} Energy cards and attach them to your Benched Pokémon in any way you like. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Énergie {L} de base, puis attachez-les à vos Pokémon de Banc comme il vous plaît. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas de Energía {L} Básica y únelas a tus Pokémon en Banca de la manera que desees. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a due carte Energia base {L} e assegnale ai tuoi Pokémon in panchina nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 cartas de Energia {L} Básica no seu baralho e ligue-as aos seus Pokémon no Banco como desejar. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-{L}-Energiekarten und lege sie beliebig an die Pokémon auf deiner Bank an. Mische anschließend dein Deck."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "This Pokémon generates electricity and channels it into its legs to keep them going strong. Boltund can run nonstop for three full days.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760689,
				tcgplayer: 542803
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760689,
				tcgplayer: 542803
			}
		},
	],

	illustrator: "Oswaldo KATO",

}

export default card