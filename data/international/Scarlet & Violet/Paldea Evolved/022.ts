import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [946],
	set: Set,

	name: {
		'fr-fr': "Virovent",
		'en-us': "Bramblin",
		'es-es': "Bramblin",
		'it-it': "Bramblin",
		'pt-br': "Bramblin",
		'de-de': "Weherba"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Chevauchée Éolienne",
			'en-us': "Ride the Wind",
			'es-es': "Rodar al Viento",
			'it-it': "Cavalcavento",
			'pt-br': "Navegação dos Ventos",
			'de-de': "Mit dem Wind wehen"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			'en-us': "Flip a coin. If heads, switch this Pokémon with 1 of your Benched Pokémon.",
			'es-es': "Lanza 1 moneda. Si sale cara, cambia este Pokémon por uno de tus Pokémon en Banca.",
			'it-it': "Lancia una moneta. Se esce testa, scambia questo Pokémon con uno della tua panchina.",
			'pt-br': "Jogue uma moeda. Se sair cara, troque este Pokémon por 1 dos seus Pokémon no Banco.",
			'de-de': "Wirf 1 Münze. Tausche bei Kopf dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715495,
				tcgplayer: 497433,
				cardtrader: 248319
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715495,
				tcgplayer: 497433,
				cardtrader: 248319
			}
		},
	],

	illustrator: "Pani Kobayashi",

	description: {
		'en-us': "A soul unable to move on to the afterlife was blown around by the wind until it got tangled up with dried grass and became a Pokémon.",
	},
}

export default card
