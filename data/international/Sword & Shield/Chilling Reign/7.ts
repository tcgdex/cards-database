import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [251],
	set: Set,

	name: {
		'en-us': "Celebi V",
		'fr-fr': "Celebi V",
		'es-es': "Celebi V",
		'it-it': "Celebi V",
		'pt-br': "Celebi V",
		'de-de': "Celebi V"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 190,
	types: ["Grass"],

	attacks: [{
		name: {
			'en-us': "Leaflet Dance",
			'fr-fr': "Foliole Dansante",
			'es-es': "Danza de los Folíolos",
			'it-it': "Danza di Foglioline",
			'pt-br': "Dança das Folhinhas",
			'de-de': "Blättchenreigen"
		},

		effect: {
			'en-us': "Attach any number of Grass Energy cards from your hand to your Pokémon in any way you like.",
			'fr-fr': "Attachez le nombre de cartes Énergie Grass voulues de votre main à vos Pokémon comme il vous plaît.",
			'es-es': "Une cualquier cantidad de cartas de Energía Grass de tu mano a tus Pokémon de la manera que desees.",
			'it-it': "Assegna ai tuoi Pokémon un numero qualsiasi di carte Energia Grass dalla tua mano nel modo che preferisci.",
			'pt-br': "Ligue qualquer número de cartas de Energia Grass da sua mão aos seus Pokémon como desejar.",
			'de-de': "Lege beliebig viele Grass-Energiekarten aus deiner Hand beliebig an deine Pokémon an."
		},

		cost: ["Grass"]
	}, {
		name: {
			'en-us': "Slash Back",
			'fr-fr': "Retour de Frappe",
			'es-es': "Tajo Cambiante",
			'it-it': "Sferzata Inversa",
			'pt-br': "Contra-arranhar",
			'de-de': "Rückschnitt"
		},

		effect: {
			'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
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
				cardmarket: 567087,
				tcgplayer: 241654
			}
		},
	],
}

export default card
