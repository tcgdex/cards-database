import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [86],
	set: Set,

	name: {
		fr: "Otaria",
		en: "Seel",
		es: "Seel",
		it: "Seel",
		pt: "Seel",
		de: "Jurob"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			fr: "Glacial",
			en: "Chilly",
			es: "Fresquito",
			it: "Addiaccio",
			pt: "Frio",
			de: "Frösteln"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		en: "Thanks to its thick fat, cold seas don't bother it at all, but it gets tired pretty easily in warm waters.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733681,
				tcgplayer: 516655,
				cardtrader: 261147
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733681,
				tcgplayer: 516655,
				cardtrader: 261147
			}
		},
	],

	illustrator: "aoki",

	
}

export default card
