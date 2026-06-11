import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [757],
	set: Set,

	name: {
		fr: "Tritox",
		en: "Salandit",
		es: "Salandit",
		it: "Salandit",
		pt: "Salandit",
		de: "Molunk"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

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

		damage: 10
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			fr: "Griffe",
			en: "Scratch",
			es: "Arañazo",
			it: "Graffio",
			pt: "Arranhão",
			de: "Kratzer"
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
		en: "It taunts its prey and lures them into narrow, rocky areas where it then sprays them with toxic gas to make them dizzy and take them down.",
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
