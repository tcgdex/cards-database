import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Rufflet",
		'fr-fr': "Furaiglon",
		'es-es': "Rufflet",
		'it-it': "Rufflet",
		'pt-br': "Rufflet",
		'de-de': "Geronimatz"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",
	illustrator: "0313",

	attacks: [{
		name: {
			'en-us': "Whirlwind",
			'fr-fr': "Cyclone",
			'es-es': "Remolino",
			'it-it': "Turbine",
			'pt-br': "Whirlwind",
			'de-de': "Wirbelwind"
		},

		effect: {
			'en-us': "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
			'fr-fr': "Votre adversaire échange son Pokémon Actif contre l'un de ses Pokémon de Banc.",
			'es-es': "Tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
			'it-it': "Il tuo avversario scambia il suo Pokémon attivo con uno della sua panchina.",
			'pt-br': "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
			'de-de': "Dein Gegner tauscht sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	dexId: [627],

	description: {
		'en-us': "A combative Pokémon, it's ready to pick a fight with anyone. It has talons that can crush hard berries."
	},

	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574194,
				tcgplayer: 246874
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574194,
				tcgplayer: 246874
			}
		},
	],
}

export default card
