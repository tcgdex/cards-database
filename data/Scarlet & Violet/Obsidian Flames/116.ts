import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

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
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			fr: "Morsure",
			en: "Bite",
			es: "Mordisco",
			it: "Morso",
			pt: "Mordida",
			de: "Biss"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		en: "This Pokémon is very friendly when it's young. Its disposition becomes vicious once it matures, but it never forgets the kindness of its master.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725196,
				tcgplayer: 509856,
				cardtrader: 255801
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725196,
				tcgplayer: 509856,
				cardtrader: 255801
			}
		},
	],

	illustrator: "Jerky",

	
}

export default card
