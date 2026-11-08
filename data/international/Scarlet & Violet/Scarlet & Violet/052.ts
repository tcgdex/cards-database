import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [912],
	set: Set,

	name: {
		'en-us': "Quaxly",
		'fr-fr': "Coiffeton",
		'es-es': "Quaxly",
		'it-it': "Quaxly",
		'pt-br': "Quaxly",
		'de-de': "Kwaks"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
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
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Kick",
			'fr-fr': "Koud'Pied",
			'es-es': "Patada",
			'it-it': "Calcio",
			'pt-br': "Chute",
			'de-de': "Tritt"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "Mizue",

	description: {
		'en-us': "This Pokémon migrated to Paldea from distant lands long ago. The gel secreted by its feathers repels water and grime.",
	},

	thirdParty: {
        cardmarket: 689765,
        tcgplayer: 475419
    }
}

export default card