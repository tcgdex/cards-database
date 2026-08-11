import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [123],
	set: Set,

	name: {
		'fr-fr': "Insécateur",
		'en-us': "Scyther",
		'es-es': "Scyther",
		'it-it': "Scyther",
		'pt-br': "Scyther",
		'de-de': "Sichlor"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'fr-fr': "Tranche Alliée",
			'en-us': "Helpful Slash",
			'es-es': "Tajo Útil",
			'it-it': "Lacerazione Altruista",
			'pt-br': "Talho de Apoio",
			'de-de': "Hilfreicher Schlitzer"
		},

		effect: {
			'fr-fr': "Attachez une carte Énergie {G} de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
			'en-us': "Attach a Basic {G} Energy card from your discard pile to 1 of your Benched Pokémon.",
			'es-es': "Une 1 carta de Energía {G} Básica de tu pila de descartes a uno de tus Pokémon en Banca.",
			'it-it': "Assegna a uno dei tuoi Pokémon in panchina una carta Energia base {G} dalla tua pila degli scarti.",
			'pt-br': "Ligue uma carta de Energia {G} Básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
			'de-de': "Lege 1 Basis-{G}-Energiekarte aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
		},

		damage: 20
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Lame Tranchante",
			'en-us': "Slicing Blade",
			'es-es': "Cuchilla Cortante",
			'it-it': "Affettalama",
			'pt-br': "Lâmina Fatiante",
			'de-de': "Schwertschneide"
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "G",

	description: {
		'en-us': "It slashes through grass with its sharp scythes, moving too fast for the human eye to track.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733718,
				tcgplayer: 516686,
				cardtrader: 261215
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733718,
				tcgplayer: 516686,
				cardtrader: 261215
			}
		},
	],

	illustrator: "Hideki Ishikawa",

	
}

export default card
