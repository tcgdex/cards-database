import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [646],
	set: Set,

	name: {
		'en-us': "Kyurem V",
		'fr-fr': "Kyurem V",
		'es-es': "Kyurem V",
		'it-it': "Kyurem V",
		'pt-br': "Kyurem V",
		'de-de': "Kyurem V"
	},

	illustrator: "takuyoa",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Rapid Freeze",
			'fr-fr': "Gel Immédiat",
			'es-es': "Congelación Veloz",
			'it-it': "Gelo Rapido",
			'pt-br': "Congelamento Rápido",
			'de-de': "Schockfrosten"
		},

		effect: {
			'en-us': "Attach any number of Water Energy cards from your hand to your Pokémon in any way you like.",
			'fr-fr': "Attachez le nombre voulu de cartes Énergie Water de votre main à vos Pokémon comme il vous plaît.",
			'es-es': "Une cualquier cantidad de cartas de Energía Water de tu mano a tus Pokémon de la manera que desees.",
			'it-it': "Assegna ai tuoi Pokémon un numero qualsiasi di carte Energia Water dalla tua mano nel modo che preferisci.",
			'pt-br': "Ligue qualquer número de cartas de Energia Water da sua mão aos seus Pokémon como desejar.",
			'de-de': "Lege beliebig viele Water-Energiekarten aus deiner Hand beliebig an deine Pokémon an."
		}
	}, {
		cost: ["Water", "Water", "Water"],

		name: {
			'en-us': "Frost Smash",
			'fr-fr': "Impact Glacial",
			'es-es': "Golpe Gélido",
			'it-it': "Gelocolpo",
			'pt-br': "Pancada Congelada",
			'de-de': "Frostschlag"
		},

		damage: 140
	}],

	retreat: 3,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 674180,
				tcgplayer: 284116
			}
		},
	],
}

export default card
