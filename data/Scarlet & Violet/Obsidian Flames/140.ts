import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [758],
	set: Set,

	name: {
		fr: "Malamandre",
		en: "Salazzle",
		es: "Salazzle",
		it: "Salazzle",
		pt: "Salazzle",
		de: "Amfira"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	evolveFrom: {
		fr: "Tritox",
		en: "Salandit",
		es: "Salandit",
		it: "Salandit",
		pt: "Salandit",
		de: "Molunk"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			fr: "Gaz Suffocant",
			en: "Suffocating Gas",
			es: "Gas Sofocante",
			it: "Gas Soffocante",
			pt: "Gás Asfixiante",
			de: "Würgegas"
		},

		damage: 40
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			fr: "Gifle Douce",
			en: "Gentle Slap",
			es: "Bofetada Gentil",
			it: "Schiaffetto",
			pt: "Tapinha",
			de: "Sanfter Hieb"
		},

		damage: 70
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
		en: "Salazzle makes its opponents light-headed with poisonous gas, then captivates them with alluring movements to turn them into loyal servants.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725220,
				tcgplayer: 509912,
				cardtrader: 255825
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725220,
				tcgplayer: 509912,
				cardtrader: 255825
			}
		},
	],

	illustrator: "Shigenori Negishi",

	
}

export default card
