import { Card } from 'models/database/card'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [357],
	set: Set,

	name: {
		'fr-fr': "Tropius",
		'en-us': "Tropius",
		'es-es': "Tropius",
		'it-it': "Tropius",
		'pt-br': "Tropius",
		'de-de': "Tropius"
	},

	illustrator: "Akira Komayama",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	attacks: [{
		name: {
			'fr-fr': "Main Verte",
			'en-us': "Attach Leaves",
			'es-es': "Unir Hojas",
			'it-it': "Assegnafoglie",
			'pt-br': "Ligar Folhas",
			'de-de': "Blätter anlegen"
		},

		effect: {
			'fr-fr': "Attachez jusqu'à 2 cartes Énergie Grass de votre pile de défausse à vos Pokémon de Banc comme il vous plaît.",
			'en-us': "Attach up to 2 Grass Energy cards from your discard pile to your Benched Pokémon in any way you like.",
			'es-es': "Une hasta 2 cartas de Energía Grass de tu pila de descartes a tus Pokémon en Banca de la manera que desees.",
			'it-it': "Assegna ai tuoi Pokémon in panchina fino a due carte Energia Grass dalla tua pila degli scarti nel modo che preferisci.",
			'pt-br': "Ligue até 2 cartas de Energia Grass da sua pilha de descarte aos seus Pokémon no Banco como desejar.",
			'de-de': "Lege bis zu 2 Grass-Energiekarten aus deinem Ablagestapel beliebig an die Pokémon auf deiner Bank an."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'fr-fr': "Tornade",
			'en-us': "Gust",
			'es-es': "Tornado",
			'it-it': "Raffica",
			'pt-br': "Lufada de Vento",
			'de-de': "Windstoß"
		},

		damage: 30,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "Bunches of delicious fruit grow around its neck. In warm areas, many ranches raise Tropius."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 539048,
				tcgplayer: 232358
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 539048,
				tcgplayer: 232358
			}
		},
	],
}

export default card
