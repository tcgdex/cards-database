import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [757],
	set: Set,

	name: {
		'fr-fr': "Tritox",
		'en-us': "Salandit",
		'es-es': "Salandit",
		'it-it': "Salandit",
		'pt-br': "Salandit",
		'de-de': "Molunk"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'fr-fr': "Gaz Suffocant",
			'en-us': "Suffocating Gas",
			'es-es': "Gas Sofocante",
			'it-it': "Gas Soffocante",
			'pt-br': "Gás Asfixiante",
			'de-de': "Würgegas"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			'fr-fr': "Griffe",
			'en-us': "Scratch",
			'es-es': "Arañazo",
			'it-it': "Graffio",
			'pt-br': "Arranhão",
			'de-de': "Kratzer"
		},

		damage: 30
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
		'en-us': "It taunts its prey and lures them into narrow, rocky areas where it then sprays them with toxic gas to make them dizzy and take them down.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725219,
				tcgplayer: 509911,
				cardtrader: 255824
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725219,
				tcgplayer: 509911,
				cardtrader: 255824
			}
		},
	],

	illustrator: "Shiburingaru",

	
}

export default card
