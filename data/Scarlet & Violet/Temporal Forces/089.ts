import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [744],
	set: Set,

	name: {
		en: "Rockruff",
		fr: "Rocabot",
		es: "Rockruff",
		it: "Rockruff",
		pt: "Rockruff",
		de: "Wuffels"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Paw Shake Punch",
			fr: "Coup de Patte",
			es: "Sacudir y Dar la Patita",
			it: "Pugno Qua la Zampa",
			pt: "Dá Soquinho",
			de: "Pfötchenhieb"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		en: "This Pokémon is very friendly when it's young. Its disposition becomes vicious once it matures, but it never forgets the kindness of its master.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760719,
				tcgplayer: 542833
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760719,
				tcgplayer: 542833
			}
		},
	],

	illustrator: "sui",

}

export default card