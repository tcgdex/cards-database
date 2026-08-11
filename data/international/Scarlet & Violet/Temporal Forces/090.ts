import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [745],
	set: Set,

	name: {
		'en-us': "Lycanroc",
		'fr-fr': "Lougaroc",
		'es-es': "Lycanroc",
		'it-it': "Lycanroc",
		'pt-br': "Lycanroc",
		'de-de': "Wolwerock"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Rockruff",
		'fr-fr': "Rocabot",
		'es-es': "Rockruff",
		'it-it': "Rockruff",
		'pt-br': "Rockruff",
		'de-de': "Wuffels"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Turbo Edge",
			'fr-fr': "Lame Turbo",
			'es-es': "Turbofilo",
			'it-it': "Turbolama",
			'pt-br': "Gume Turbo",
			'de-de': "Turbokante"
		},

		effect: {
			'en-us': "Attach up to 2 Basic {F} Energy cards from your discard pile to your Benched Pokémon in any way you like.",
			'fr-fr': "Attachez jusqu'à 2 cartes Énergie {F} de base de votre pile de défausse à vos Pokémon de Banc comme il vous plaît.",
			'es-es': "Une hasta 2 cartas de Energía {F} Básica de tu pila de descartes a tus Pokémon en Banca de la manera que desees.",
			'it-it': "Assegna ai tuoi Pokémon in panchina fino a due carte Energia base {F} dalla tua pila degli scarti nel modo che preferisci.",
			'pt-br': "Ligue até 2 cartas de Energia {F} Básica da sua pilha de descarte aos seus Pokémon no Banco como desejar.",
			'de-de': "Lege bis zu 2 Basis-{F}-Energiekarten aus deinem Ablagestapel beliebig an die Pokémon auf deiner Bank an."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "Lycanroc attacks its prey with its sharp claws and fangs. It loyally obeys the instructions of a Trainer it trusts.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760720,
				tcgplayer: 542834
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760720,
				tcgplayer: 542834
			}
		},
	],

	illustrator: "Yoshioka",

}

export default card