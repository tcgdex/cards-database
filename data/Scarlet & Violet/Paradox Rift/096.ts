import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [619],
	set: Set,

	name: {
		en: "Mienfoo",
		fr: "Kungfouine",
		es: "Mienfoo",
		it: "Mienfoo",
		pt: "Mienfoo",
		de: "Lin-Fu"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Low Kick",
			fr: "Balayage",
			es: "Patada Baja",
			it: "Colpo Basso",
			pt: "Rasteira",
			de: "Fußkick"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Beatdown",
			fr: "Dérouillée",
			es: "Derrumbar",
			it: "Batosta",
			pt: "Abater",
			de: "Niederprügler"
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
		en: "Though small, Mienfoo's temperament is fierce. Any creature that approaches Mienfoo carelessly will be greeted with a flurry of graceful attacks.",
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
