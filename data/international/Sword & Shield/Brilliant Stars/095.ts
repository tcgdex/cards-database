import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [877],
	set: Set,

	name: {
		'en-us': "Morpeko V",
		'fr-fr': "Morpeko V",
		'es-es': "Morpeko V",
		'it-it': "Morpeko V",
		'pt-br': "Morpeko V",
		'de-de': "Morpeko V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 190,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Gnaw and Run",
			'fr-fr': "Ronger et Courir",
			'es-es': "Roer y Correr",
			'it-it': "Rosicchia e Fuggi",
			'pt-br': "Roer e Correr",
			'de-de': "Annagen und Abhauen"
		},

		effect: {
			'en-us': "You may switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
			'es-es': "Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca.",
			'it-it': "Puoi scambiare questo Pokémon con uno della tua panchina.",
			'pt-br': "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
			'de-de': "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
		},

		damage: 30
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Hangry Spike",
			'fr-fr': "Smash Affamé",
			'es-es': "Ascenso Voraz",
			'it-it': "Punta Panciavuota",
			'pt-br': "Espinho Voraz",
			'de-de': "Extremer Kohldampf"
		},

		effect: {
			'en-us': "If you played Marnie's Pride from your hand during this turn, this attack does 120 more damage.",
			'fr-fr': "Si vous avez joué Fierté de Rosemary de votre main pendant ce tour, cette attaque inflige 120 dégâts supplémentaires.",
			'es-es': "Si has jugado 1 carta de Orgullo de Roxy de tu mano durante este turno, este ataque hace 120 puntos de daño más.",
			'it-it': "Se hai giocato Orgoglio di Mary dalla tua mano durante questo turno, questo attacco infligge 120 danni in più.",
			'pt-br': "Se você jogou Orgulho da Marine da sua mão durante este turno, este ataque causará 120 pontos de dano a mais.",
			'de-de': "Wenn du Marys Stolz während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "120+"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 608641,
				tcgplayer: 263813
			}
		},
	],
}

export default card
