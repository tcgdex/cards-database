import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [619],
	set: Set,

	name: {
		'en-us': "Mienfoo",
		'fr-fr': "Kungfouine",
		'es-es': "Mienfoo",
		'it-it': "Mienfoo",
		'pt-br': "Mienfoo",
		'de-de': "Lin-Fu"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Low Kick",
			'fr-fr': "Balayage",
			'es-es': "Patada Baja",
			'it-it': "Colpo Basso",
			'pt-br': "Rasteira",
			'de-de': "Fußkick"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Beatdown",
			'fr-fr': "Dérouillée",
			'es-es': "Derrumbar",
			'it-it': "Batosta",
			'pt-br': "Abater",
			'de-de': "Niederprügler"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Though small, Mienfoo's temperament is fierce. Any creature that approaches Mienfoo carelessly will be greeted with a flurry of graceful attacks.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740608,
				tcgplayer: 523766,
				cardtrader: 265206
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740608,
				tcgplayer: 523766,
				cardtrader: 265206
			}
		},
	],

	illustrator: "Natsumi Yoshida",

	
}

export default card
