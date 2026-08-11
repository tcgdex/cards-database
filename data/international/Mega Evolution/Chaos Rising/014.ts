import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		'en-us': "They set off on their own from their pride and live by themselves to become stronger. These hot-blooded Pokémon are quick to fight.",
	},


	name: {
		'en-us': "Litleo",
		'fr-fr': "Hélionceau",
		'es-es': "Litleo",
		'es-mx': "Litleo",
		'de-de': "Leufeo",
		'it-it': "Litleo",
		'pt-br': "Litleo"
	},

	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",
	dexId: [667],
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'es-mx': "Tacleada",
			'de-de': "Tackle",
			'it-it': "Azione",
			'pt-br': "Investida"
		},

		cost: ["Colorless"],
		damage: 10
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886406,
				tcgplayer: 693505
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 886406,
				tcgplayer: 693505
			}
		},
	],
}

export default card
