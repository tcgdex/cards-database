import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [915],
	set: Set,

	name: {
		fr: "Gourmelet",
		en: "Lechonk",
		es: "Lechonk",
		it: "Lechonk",
		pt: "Lechonk",
		de: "Ferkuli"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Charge",
			en: "Tackle",
			es: "Placaje",
			it: "Azione",
			pt: "Investida",
			de: "Tackle"
		},

		damage: 20
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
		en: "It searches for food all day. It possesses a keen sense of smell but doesn't use it for anything other than foraging.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 725289,
				tcgplayer: 509957,
				cardtrader: 255651
			}
		},
	],

	illustrator: "Narumi Sato",

	
}

export default card
