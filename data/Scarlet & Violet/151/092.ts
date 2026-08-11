import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [92],
	set: Set,

	name: {
		fr: "Fantominus",
		en: "Gastly",
		es: "Gastly",
		it: "Gastly",
		pt: "Gastly",
		de: "Nebulak"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			fr: "Gaz Suffocant",
			en: "Suffocating Gas",
			es: "Gas Sofocante",
			it: "Gas Soffocante",
			pt: "Gás Asfixiante",
			de: "Würgegas"
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
		en: "It wraps its opponent in its gas-like body, slowly weakening its prey by poisoning it through the skin.",
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
