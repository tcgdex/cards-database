import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [808],
	set: Set,

	name: {
		fr: "Meltan",
		en: "Meltan",
		es: "Meltan",
		it: "Meltan",
		pt: "Meltan",
		de: "Meltan"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			fr: "Dissolution",
			en: "Melt",
			es: "Derretir",
			it: "Liquefazione",
			pt: "Derreter",
			de: "Schmelzen"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		en: "They live as a group, but when the time comes, one strong Meltan will absorb all the others and evolve.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725232,
				tcgplayer: 509939,
				cardtrader: 255837
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725232,
				tcgplayer: 509939,
				cardtrader: 255837
			}
		},
	],

	illustrator: "Nobuhiro Imagawa",

	
}

export default card
