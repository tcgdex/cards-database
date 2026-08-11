import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [557],
	set: Set,

	name: {
		'en-us': "Dwebble",
		'fr-fr': "Crabicoque",
		'es-es': "Dwebble",
		'it-it': "Dwebble",
		'pt-br': "Dwebble",
		'de-de': "Lithomith"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Beat",
			'fr-fr': "Bataille",
			'es-es': "Toque",
			'it-it': "Battuta",
			'pt-br': "Pulso",
			'de-de': "Verprügler"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "It first tries to find a rock to live in, but if there are no suitable rocks to be found, Dwebble may move in to the ports of a Hippowdon.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740482,
				tcgplayer: 523605,
				cardtrader: 265011
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740482,
				tcgplayer: 523605,
				cardtrader: 265011
			}
		},
	],

	illustrator: "Scav",

	
}

export default card
