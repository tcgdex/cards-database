import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [744],
	set: Set,

	name: {
		fr: "Rocabot",
		en: "Rockruff",
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
		cost: ["Fighting"],

		name: {
			fr: "Jet-Pierres",
			en: "Rock Throw",
			es: "Lanzarrocas",
			it: "Sassata",
			pt: "Lançamento de Rocha",
			de: "Steinwurf"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			fr: "Morsure",
			en: "Bite",
			es: "Mordisco",
			it: "Morso",
			pt: "Mordida",
			de: "Biss"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715591,
				tcgplayer: 497531,
				cardtrader: 248762
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715591,
				tcgplayer: 497531,
				cardtrader: 248762
			}
		},
	],

	illustrator: "0313",

	description: {
		en: "This Pokémon is very friendly when it's young. Its disposition becomes vicious once it matures, but it never forgets the kindness of its master.",
	},
}

export default card
