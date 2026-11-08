import { Card } from "models/database/card"
import Set from "../Fusion Strike"

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

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Teeziro",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Leaflet Dance",
			'fr-fr': "Foliole Dansante",
			'de-de': "Blättchenreigen",
			'es-es': "Danza de los Folíolos",
			'pt-br': "Dança das Folhinhas",
			'it-it': "Danza di Foglioline"
		},

		effect: {
			'en-us': "Attach any number of {G} Energy cards from your hand to your Pokémon in any way you like.",
			'fr-fr': "Attachez le nombre de cartes Énergie {G} voulues de votre main à vos Pokémon comme il vous plaît.",
			'de-de': "Lege beliebig viele {G}-Energiekarten aus deiner Hand beliebig an deine Pokémon an.",
			'es-es': "Une cualquier cantidad de cartas de Energía {G} de tu mano a tus Pokémon de la manera que desees.",
			'pt-br': "Ligue qualquer número de cartas de Energia {G} da sua mão aos seus Pokémon como desejar.",
			'it-it': "Assegna ai tuoi Pokémon un numero qualsiasi di carte Energia {G} dalla tua mano nel modo che preferisci."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Slash Back",
			'fr-fr': "Retour de Frappe",
			'de-de': "Rückschnitt",
			'es-es': "Tajo Cambiante",
			'pt-br': "Contra-arranhar",
			'it-it': "Sferzata Inversa"
		},

		damage: 60,

		effect: {
			'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
			'es-es': "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			'it-it': "Scambia questo Pokémon con uno della tua panchina."
		}
	}],


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 582981,
				tcgplayer: 253138
			}
		},
	],
}

export default card
