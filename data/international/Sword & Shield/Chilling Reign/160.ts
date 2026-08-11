import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [251],
	set: Set,

	name: {
		'fr-fr': "Celebi V",
		'en-us': "Celebi V",
		'es-es': "Celebi V",
		'it-it': "Celebi V",
		'pt-br': "Celebi V",
		'de-de': "Celebi V"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Grass"],

	attacks: [{
		name: {
			'fr-fr': "Foliole Dansante",
			'en-us': "Leaflet Dance",
			'es-es': "Danza de los Folíolos",
			'it-it': "Danza di Foglioline",
			'pt-br': "Dança das Folhinhas",
			'de-de': "Blättchenreigen"
		},

		effect: {
			'fr-fr': "Attachez le nombre de cartes Énergie Grass voulues de votre main à vos Pokémon comme il vous plaît.",
			'en-us': "Attach any number of Grass Energy cards from your hand to your Pokémon in any way you like.",
			'es-es': "Une cualquier cantidad de cartas de Energía Grass de tu mano a tus Pokémon de la manera que desees.",
			'it-it': "Assegna ai tuoi Pokémon un numero qualsiasi di carte Energia Grass dalla tua mano nel modo che preferisci.",
			'pt-br': "Ligue qualquer número de cartas de Energia Grass da sua mão aos seus Pokémon como desejar.",
			'de-de': "Lege beliebig viele Grass-Energiekarten aus deiner Hand beliebig an deine Pokémon an."
		},

		cost: ["Grass"]
	}, {
		name: {
			'fr-fr': "Retour de Frappe",
			'en-us': "Slash Back",
			'es-es': "Tajo Cambiante",
			'it-it': "Sferzata Inversa",
			'pt-br': "Contra-arranhar",
			'de-de': "Rückschnitt"
		},

		effect: {
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
			'es-es': "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			'it-it': "Scambia questo Pokémon con uno della tua panchina.",
			'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
		},

		damage: 60,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 567268,
				tcgplayer: 241655
			}
		},
	],
}

export default card
