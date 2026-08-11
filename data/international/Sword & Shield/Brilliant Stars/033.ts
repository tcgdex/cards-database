import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [342],
	set: Set,

	name: {
		'en-us': "Crawdaunt",
		'fr-fr': "Colhomard",
		'es-es': "Crawdaunt",
		'it-it': "Crawdaunt",
		'pt-br': "Crawdaunt",
		'de-de': "Krebutack"
	},

	illustrator: "Shibuzoh.",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Corphish",
		'fr-fr': "Écrapince",
		'es-es': "Corphish",
		'it-it': "Corphish",
		'pt-br': "Corphish",
		'de-de': "Krebscorps"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Corkscrew Punch",
			'fr-fr': "Poing Tire-Bouchon",
			'es-es': "Puño Tirabuzón",
			'it-it': "Pugno Rotante",
			'pt-br': "Soco Saca-rolha",
			'de-de': "Korkenzieherhieb"
		},

		damage: 30
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Crab Impact",
			'fr-fr': "Crabe Impactant",
			'es-es': "Impacto Cangrejo",
			'it-it': "Granchimpatto",
			'pt-br': "Impacto Caranguejo",
			'de-de': "Krabbeinschlag"
		},

		effect: {
			'en-us': "Discard 2 Energy from this Pokémon.",
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
			'es-es': "Descarta 2 Energías de este Pokémon.",
			'it-it': "Scarta due Energie da questo Pokémon.",
			'pt-br': "Descarte 2 Energias deste Pokémon.",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 150
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "A rough customer that wildly flails its giant claws. It is said to be extremely hard to raise.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608483,
				tcgplayer: 263732
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608483,
				tcgplayer: 263732
			}
		},
	],
}

export default card
