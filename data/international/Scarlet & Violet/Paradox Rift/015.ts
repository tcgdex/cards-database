import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [948],
	set: Set,

	name: {
		'en-us': "Toedscool",
		'fr-fr': "Terracool",
		'es-es': "Toedscool",
		'it-it': "Toedscool",
		'pt-br': "Toedscool",
		'de-de': "Tentagra"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Clinging Spore",
			'fr-fr': "Spore Agrippante",
			'es-es': "Espora Pegajosa",
			'it-it': "Spora Appiccicosa",
			'pt-br': "Esporos Grudentos",
			'de-de': "Haftspore"
		},

		effect: {
			'en-us': "Attach a Basic {G} Energy card from your hand to 1 of your Benched Pokémon.",
			'fr-fr': "Attachez une carte Énergie {G} de base de votre main à l'un de vos Pokémon de Banc.",
			'es-es': "Une 1 carta de Energía {G} Básica de tu mano a uno de tus Pokémon en Banca.",
			'it-it': "Assegna a uno dei tuoi Pokémon in panchina una carta Energia base {G} dalla tua mano.",
			'pt-br': "Ligue uma carta de Energia {G} Básica da sua mão a 1 dos seus Pokémon no Banco.",
			'de-de': "Lege 1 Basis-{G}-Energiekarte aus deiner Hand an 1 Pokémon auf deiner Bank an."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Vine Slap",
			'fr-fr': "Gifle de Liane",
			'es-es': "Bofetón Látigo",
			'it-it': "Lianasberla",
			'pt-br': "Tapa de Vinhas",
			'de-de': "Rankenklatscher"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Though it looks like Tentacool, Toedscool is a completely different species. Its legs may be thin, but it can run at a speed of 30 mph.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740491,
				tcgplayer: 523615,
				cardtrader: 265099
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740491,
				tcgplayer: 523615,
				cardtrader: 265099
			}
		},
	],

	illustrator: "Tomokazu Komiya",

	
}

export default card
