import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [506],
	set: Set,

	name: {
		fr: "Ponchiot",
		en: "Lillipup",
		es: "Lillipup",
		it: "Lillipup",
		pt: "Lillipup",
		de: "Yorkleff"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Ruade",
			en: "Rear Kick",
			es: "Patada Trasera",
			it: "Retrocalcio",
			pt: "Chute Traseiro",
			de: "Rückwärtskick"
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
		en: "This Pokémon is far brighter than the average child, and Lillipup won't forget the love it receives or any abuse it suffers.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725250,
				tcgplayer: 509707,
				cardtrader: 256066
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725250,
				tcgplayer: 509707,
				cardtrader: 256066
			}
		},
	],

	illustrator: "Yuka Morii",

	
}

export default card
