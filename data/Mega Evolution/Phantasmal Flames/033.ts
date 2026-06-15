import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Pawmo",
		fr: "Pohmotte",
		es: "Pawmo",
		'es-mx': "Pawmo",
		de: "Pamamo",
		it: "Pawmo",
		pt: "Pawmo"
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [922],
	hp: 90,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			en: "Electric Punch",
			fr: "Poing Électrique",
			es: "Puño Eléctrico",
			'es-mx': "Puño Eléctrico",
			de: "Elektroschlag",
			it: "Pugno Elettrico",
			pt: "Murro Elétrico"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		en: "When its group is attacked, Pawmo is the first to leap into battle, defeating enemies with a fighting technique that utilizes electric shocks.",
	},

	illustrator: "Taiga Kayama",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857608,
				tcgplayer: 662211,
				cardtrader: 356816
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857608,
				tcgplayer: 662211,
				cardtrader: 356816
			}
		},
	],	
}

export default card
