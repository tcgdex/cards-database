import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [35],
	set: Set,

	name: {
		'en-us': "Clefairy",
		'fr-fr': "Mélofée",
		'es-es': "Clefairy",
		'it-it': "Clefairy",
		'pt-br': "Clefairy",
		'de-de': "Piepi"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Pound",
			'fr-fr': "Écras'Face",
			'es-es': "Destructor",
			'it-it': "Botta",
			'pt-br': "Pancada",
			'de-de': "Klaps"
		},

		damage: 10
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Magical Shot",
			'fr-fr': "Coup Magique",
			'es-es': "Disparo Mágico",
			'it-it': "Magicolpo",
			'pt-br': "Tiro Mágico",
			'de-de': "Magischer Schuss"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "It is said that happiness will come to those who see a gathering of Clefairy dancing under a full moon.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608503,
				tcgplayer: 263769
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608503,
				tcgplayer: 263769
			}
		},
	],
}

export default card
