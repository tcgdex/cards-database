import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [957],
	set: Set,

	name: {
		'fr-fr': "Forgerette",
		'en-us': "Tinkatink",
		'es-es': "Tinkatink",
		'it-it': "Tinkatink",
		'pt-br': "Tinkatink",
		'de-de': "Forgita"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Collecte",
			'en-us': "Collect",
			'es-es': "Coleccionar",
			'it-it': "Tassa",
			'pt-br': "Coleta",
			'de-de': "Sammeln"
		},

		effect: {
			'fr-fr': "Piochez une carte.",
			'en-us': "Draw a card.",
			'es-es': "Roba 1 carta.",
			'it-it': "Pesca una carta.",
			'pt-br': "Compre uma carta.",
			'de-de': "Ziehe 1 Karte."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'fr-fr': "Poing Tire-Bouchon",
			'en-us': "Corkscrew Punch",
			'es-es': "Puño Tirabuzón",
			'it-it': "Pugno Rotante",
			'pt-br': "Soco Saca-rolha",
			'de-de': "Korkenzieherhieb"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715575,
				tcgplayer: 497515,
				cardtrader: 248729
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715575,
				tcgplayer: 497515,
				cardtrader: 248729
			}
		},
	],

	illustrator: "Mizue",

	description: {
		'en-us': "It swings its handmade hammer around to protect itself, but the hammer is often stolen by Pokémon that eat metal.",
	},
}

export default card
