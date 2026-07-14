import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [692],
	set: Set,

	name: {
		en: "Clauncher",
		fr: "Flingouste",
		es: "Clauncher",
		it: "Clauncher",
		pt: "Clauncher",
		de: "Scampisto"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Vise Grip",
			fr: "Force Poigne",
			es: "Agarre",
			it: "Presa",
			pt: "Agarramento Compressor",
			de: "Klammer"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: "holo"
		}
	],

	illustrator: "Shinya Komatsu",

	description: {
		en: "Clauncher's claws will regrow if they fall off. The meat inside the claws is edible, but it has a distinct flavor that doesn't appeal to all tastes.",
	},

	thirdParty: {
        cardmarket: 702501,
        tcgplayer: 490066
    }
}

export default card