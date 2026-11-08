import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [924],
	set: Set,

	name: {
		'en-us': "Tandemaus",
		'fr-fr': "Compagnol",
		'es-es': "Tandemaus",
		'it-it': "Tandemaus",
		'pt-br': "Tandemaus",
		'de-de': "Zwieps"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Tumble Over",
			'fr-fr': "Culbuter",
			'es-es': "Tropezarse",
			'it-it': "Ruzzolone",
			'pt-br': "Tombar",
			'de-de': "Umkippen"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "The pair sticks together no matter what. They split any food they find exactly in half and then eat it together.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740694,
				tcgplayer: 523835,
				cardtrader: 265383
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740694,
				tcgplayer: 523835,
				cardtrader: 265383
			}
		},
	],

	illustrator: "Akira Komayama",

	
}

export default card
