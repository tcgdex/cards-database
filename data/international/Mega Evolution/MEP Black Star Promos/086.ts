import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Slowpoke",
		'fr-fr': "Ramoloss",
		'es-es': "Slowpoke",
		'it-it': "Slowpoke",
		'pt-br': "Slowpoke",
		'de-de': "Flegmon"
	},

	illustrator: "miki kudo",
	rarity: "Promo",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",
	dexId: [79],

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Dopey Face",
			'de-de': "Dösiger Blick",
			'pt-br': "Rosto Atordoado"
		},

		effect: {
			'en-us': "This Pokémon can't be Confused.",
			'de-de': "Dieses Pokémon kann nicht verwirrt werden.",
			'pt-br': "Este Pokémon não pode ficar Confuso."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			'en-us': "Super Psy Bolt",
			'fr-fr': "Super Psy",
			'es-es': "Superrayo Psi",
			'it-it': "Superpsico",
			'pt-br': "Super-raio Psíquico",
			'de-de': "Super-Psischlag"
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "J",

	weaknesses: [{
		type: "Darkness",
		value: "x2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 898176,
				tcgplayer: 706130
			}
		},
	],
}

export default card
