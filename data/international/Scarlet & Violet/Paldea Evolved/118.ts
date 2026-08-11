import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [766],
	set: Set,

	name: {
		'fr-fr': "Quartermac",
		'en-us': "Passimian",
		'es-es': "Passimian",
		'it-it': "Passimian",
		'pt-br': "Passimian",
		'de-de': "Quartermak"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			'fr-fr': "Passe Décisive",
			'en-us': "Make the Assist",
			'es-es': "Prestar Ayuda",
			'it-it': "Fare un Assist",
			'pt-br': "Dar Assistência",
			'de-de': "Zuspielen"
		},

		effect: {
			'fr-fr': "Déplacez une Énergie de ce Pokémon vers l'un de vos Pokémon de Banc.",
			'en-us': "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
			'es-es': "Mueve 1 Energía de este Pokémon a uno de tus Pokémon en Banca.",
			'it-it': "Sposta un'Energia da questo Pokémon a uno di quelli nella tua panchina.",
			'pt-br': "Mova uma Energia deste Pokémon para 1 dos seus Pokémon no Banco.",
			'de-de': "Verschiebe 1 Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank."
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715593,
				tcgplayer: 497533,
				cardtrader: 248765
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715593,
				tcgplayer: 497533,
				cardtrader: 248765
			}
		},
	],

	illustrator: "Jerky",

	description: {
		'en-us': "This Pokémon battles by throwing hard berries. It won't obey a Trainer who throws Poké Balls without skill.",
	},
}

export default card
