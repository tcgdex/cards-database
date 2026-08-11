import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [59],
	set: Set,

	name: {
		'fr-fr': "Arcanin",
		'en-us': "Arcanine",
		'es-es': "Arcanine",
		'it-it': "Arcanine",
		'pt-br': "Arcanine",
		'de-de': "Arkani"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],
	evolveFrom: {
		'fr-fr': "Caninos",
		'en-us': "Growlithe",
		'es-es': "Growlithe",
		'it-it': "Growlithe",
		'pt-br': "Growlithe",
		'de-de': "Fukano"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			'fr-fr': "Torrent Torride",
			'en-us': "Torrid Torrent",
			'es-es': "Torrente Tórrido",
			'it-it': "Torrente Ardente",
			'pt-br': "Dilúvio Tórrido",
			'de-de': "Heiße Flut"
		},

		effect: {
			'fr-fr': "Attachez jusqu'à 2 cartes Énergie {R} de base de votre pile de défausse à ce Pokémon.",
			'en-us': "Attach up to 2 Basic {R} Energy cards from your discard pile to this Pokémon.",
			'es-es': "Une hasta 2 cartas de Energía {R} Básica de tu pila de descartes a este Pokémon.",
			'it-it': "Assegna a questo Pokémon fino a due carte Energia base {R} dalla tua pila degli scarti.",
			'pt-br': "Ligue até 2 cartas de Energia {R} Básica da sua pilha de descarte a este Pokémon.",
			'de-de': "Lege bis zu 2 Basis-{R}-Energiekarten aus deinem Ablagestapel an dieses Pokémon an."
		},

		damage: 30
	}, {
		cost: ["Fire", "Fire", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Croc Dynamite",
			'en-us': "Dynamite Fang",
			'es-es': "Colmillo Dinamita",
			'it-it': "Zannadinamite",
			'pt-br': "Presa Dinamite",
			'de-de': "Dynamitfänge"
		},

		effect: {
			'fr-fr': "Défaussez 2 Énergies {R} de ce Pokémon.",
			'en-us': "Discard 2 {R} Energy from this Pokémon.",
			'es-es': "Descarta 2 Energías {R} de este Pokémon.",
			'it-it': "Scarta due Energie {R} da questo Pokémon.",
			'pt-br': "Descarte 2 Energias {R} deste Pokémon.",
			'de-de': "Lege 2 {R}-Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 240
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "G",

	description: {
		'en-us': "An ancient picture scroll shows that people were captivated by its movement as it ran through prairies.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733654,
				tcgplayer: 516248,
				cardtrader: 261061
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733654,
				tcgplayer: 516248,
				cardtrader: 261061
			}
		},
	],

	illustrator: "Atsushi Furusawa",

	
}

export default card
