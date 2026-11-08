import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [92],
	set: Set,

	name: {
		'fr-fr': "Fantominus",
		'en-us': "Gastly",
		'es-es': "Gastly",
		'it-it': "Gastly",
		'pt-br': "Gastly",
		'de-de': "Nebulak"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'fr-fr': "Gaz Suffocant",
			'en-us': "Suffocating Gas",
			'es-es': "Gas Sofocante",
			'it-it': "Gas Soffocante",
			'pt-br': "Gás Asfixiante",
			'de-de': "Würgegas"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "It wraps its opponent in its gas-like body, slowly weakening its prey by poisoning it through the skin.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733687,
				tcgplayer: 516661,
				cardtrader: 261118
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733687,
				tcgplayer: 516661,
				cardtrader: 261118
			}
		},
	],

	illustrator: "Tomokazu Komiya",

	
}

export default card
