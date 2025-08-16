import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [353],
	set: Set,

	name: {
		en: "Shuppet",
		fr: "Polichombr",
		es: "Shuppet",
		it: "Shuppet",
		pt: "Shuppet",
		de: "Shuppet"
	},

	illustrator: "OKACHEKE",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	attacks: [{
		name: {
			en: "Will-O-Wisp",
			fr: "Feu Follet",
			es: "Fuego Fatuo",
			it: "Fuocofatuo",
			pt: "Fogo Fátuo",
			de: "Irrlicht"
		},

		damage: 20,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "There's a proverb that says, \"Shun the house where Shuppet gather in the growing dusk.\""
	},

	thirdParty: {
		cardmarket: 567170,
		tcgplayer: 241723
	}
}

export default card
