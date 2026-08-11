import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Nuzleaf",
		'fr-fr': "Pifeuil",
		'de-de': "Blanas",
		'it-it': "Nuzleaf",
		'es-es': "Nuzleaf",
		'pt-br': "Nuzleaf",
		'es-mx': "Nuzleaf"
	},

	illustrator: "takashi shiraishi",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Seedot",
		'fr-fr': "Grainipiot",
		'de-de': "Samurzel",
		'it-it': "Seedot",
		'es-es': "Seedot",
		'pt-br': "Seedot",
		'es-mx': "Seedot"
	},
	stage: "Stage1",
	dexId: [274],

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Pound",
			'fr-fr': "Écras'Face",
			'de-de': "Klaps",
			'it-it': "Botta",
			'es-es': "Destructor",
			'pt-br': "Pancada",
			'es-mx': "Destructor"
		},

		damage: 30
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Low Kick",
			'fr-fr': "Balayage",
			'de-de': "Fußkick",
			'it-it': "Colpo Basso",
			'es-es': "Patada Baja",
			'pt-br': "Rasteira",
			'es-mx': "Patada Baja"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851085,
				tcgplayer: 654353
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851085,
				tcgplayer: 654353
			}
		},
	],
}

export default card
