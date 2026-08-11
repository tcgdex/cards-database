import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [965],
	set: Set,

	name: {
		'fr-fr': "Vrombi",
		'en-us': "Varoom",
		'es-es': "Varoom",
		'it-it': "Varoom",
		'pt-br': "Varoom",
		'de-de': "Knattox"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			'fr-fr': "Gaz Suffocant",
			'en-us': "Suffocating Gas",
			'es-es': "Gas Sofocante",
			'it-it': "Gas Soffocante",
			'pt-br': "Gás Asfixiante",
			'de-de': "Würgegas"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "It is said that this Pokémon was born when an unknown poison Pokémon entered and inspirited an engine left at a scrap-processing factory.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725235,
				tcgplayer: 509942,
				cardtrader: 255840
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725235,
				tcgplayer: 509942,
				cardtrader: 255840
			}
		},
	],

	illustrator: "Saya Tsuruta",

	
}

export default card
